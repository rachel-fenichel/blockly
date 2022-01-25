#!/usr/bin/env node
"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
exports.__esModule = true;
exports.toClosureJS = exports.getCommonParentDirectory = void 0;
var fs = require("fs");
var minimist = require("minimist");
var path = require("path");
var ts = require("typescript");
var tsickle = require("tsickle");
function usage() {
    console.error("usage: tsickle [tsickle options] -- [tsc options]\n\nexample:\n  tsickle --externs=foo/externs.js -- -p src --noImplicitAny\n\ntsickle flags are:\n  --externs=PATH        save generated Closure externs.js to PATH\n  --typed               [experimental] attempt to provide Closure types instead of {?}\n  --fatalWarnings       whether warnings should be fatal, and cause tsickle to return a non-zero exit code\n");
}
/**
 * Parses the command-line arguments, extracting the tsickle settings and
 * the arguments to pass on to tsc.
 */
function loadSettingsFromArgs(args) {
    var settings = {};
    var parsedArgs = minimist(args);
    for (var _i = 0, _a = Object.keys(parsedArgs); _i < _a.length; _i++) {
        var flag = _a[_i];
        switch (flag) {
            case 'h':
            case 'help':
                usage();
                process.exit(0);
                break;
            case 'externs':
                settings.externsPath = parsedArgs[flag];
                break;
            case 'typed':
                settings.isTyped = true;
                break;
            case 'verbose':
                settings.verbose = true;
                break;
            case 'fatalWarnings':
                settings.fatalWarnings = true;
                break;
            case '_':
                // This is part of the minimist API, and holds args after the '--'.
                break;
            default:
                console.error("unknown flag '--" + flag + "'");
                usage();
                process.exit(1);
        }
    }
    // Arguments after the '--' arg are arguments to tsc.
    var tscArgs = parsedArgs['_'];
    return { settings: settings, tscArgs: tscArgs };
}
/**
 * Determine the lowest-level common parent directory of the given list of files.
 */
function getCommonParentDirectory(fileNames) {
    var pathSplitter = /[\/\\]+/;
    var commonParent = fileNames[0].split(pathSplitter);
    for (var i = 1; i < fileNames.length; i++) {
        var thisPath = fileNames[i].split(pathSplitter);
        var j = 0;
        while (thisPath[j] === commonParent[j]) {
            j++;
        }
        commonParent.length = j; // Truncate without copying the array
    }
    if (commonParent.length === 0) {
        return '/';
    }
    else {
        return commonParent.join(path.sep);
    }
}
exports.getCommonParentDirectory = getCommonParentDirectory;
/**
 * Loads the tsconfig.json from a directory.
 *
 * TODO(martinprobst): use ts.findConfigFile to match tsc behaviour.
 *
 * @param args tsc command-line arguments.
 */
function loadTscConfig(args) {
    var _a;
    // Gather tsc options/input files from command line.
    var _b = ts.parseCommandLine(args), options = _b.options, fileNames = _b.fileNames, errors = _b.errors;
    if (errors.length > 0) {
        return { options: {}, fileNames: [], errors: errors };
    }
    // Store file arguments
    var tsFileArguments = fileNames;
    // Read further settings from tsconfig.json.
    var projectDir = options.project || '.';
    var configFileName = path.join(projectDir, 'tsconfig.json');
    var _c = ts.readConfigFile(configFileName, function (path) { return fs.readFileSync(path, 'utf-8'); }), json = _c.config, error = _c.error;
    if (error) {
        return { options: {}, fileNames: [], errors: [error] };
    }
    (_a = ts.parseJsonConfigFileContent(json, ts.sys, projectDir, options, configFileName), options = _a.options, fileNames = _a.fileNames, errors = _a.errors);
    if (errors.length > 0) {
        return { options: {}, fileNames: [], errors: errors };
    }
    // if file arguments were given to the typescript transpiler then transpile only those files
    fileNames = tsFileArguments.length > 0 ? tsFileArguments : fileNames;
    return { options: options, fileNames: fileNames, errors: [] };
}
/**
 * Compiles TypeScript code into Closure-compiler-ready JS.
 */
function toClosureJS(options, fileNames, settings, writeFile) {
    // Use absolute paths to determine what files to process since files may be imported using
    // relative or absolute paths
    var absoluteFileNames = fileNames.map(function (i) { return path.resolve(i); });
    var compilerHost = ts.createCompilerHost(options);
    var program = ts.createProgram(absoluteFileNames, options, compilerHost);
    var filesToProcess = new Set(absoluteFileNames);
    var rootModulePath = options.rootDir || getCommonParentDirectory(absoluteFileNames);
    var transformerHost = {
        rootDirsRelative: function (f) { return f; },
        shouldSkipTsickleProcessing: function (fileName) {
            return !filesToProcess.has(path.resolve(fileName));
        },
        shouldIgnoreWarningsForPath: function (fileName) { return !settings.fatalWarnings; },
        pathToModuleName: function (context, fileName) {
            return tsickle.pathToModuleName(rootModulePath, context, fileName);
        },
        fileNameToModuleId: function (fileName) { return path.relative(rootModulePath, fileName); },
        es5Mode: true,
        googmodule: true,
        transformDecorators: true,
        transformTypesToClosure: true,
        typeBlackListPaths: new Set(),
        untyped: false,
        logWarning: function (warning) { return console.error(ts.formatDiagnostics([warning], compilerHost)); },
        options: options,
        moduleResolutionHost: compilerHost
    };
    var diagnostics = ts.getPreEmitDiagnostics(program);
    if (diagnostics.length > 0) {
        return {
            tsMigrationExportsShimFiles: new Map(),
            diagnostics: diagnostics,
            modulesManifest: new tsickle.ModulesManifest(),
            externs: {},
            emitSkipped: true,
            emittedFiles: []
        };
    }
    return tsickle.emit(program, transformerHost, writeFile);
}
exports.toClosureJS = toClosureJS;
function main(args) {
    var _a = loadSettingsFromArgs(args), settings = _a.settings, tscArgs = _a.tscArgs;
    var config = loadTscConfig(tscArgs);
    if (config.errors.length) {
        console.error(ts.formatDiagnostics(config.errors, ts.createCompilerHost(config.options)));
        return 1;
    }
    if (config.options.module !== ts.ModuleKind.CommonJS) {
        // This is not an upstream TypeScript diagnostic, therefore it does not go
        // through the diagnostics array mechanism.
        console.error('tsickle converts TypeScript modules to Closure modules via CommonJS internally. ' +
            'Set tsconfig.js "module": "commonjs"');
        return 1;
    }
    // Run tsickle+TSC to convert inputs to Closure JS files.
    var result = toClosureJS(config.options, config.fileNames, settings, function (filePath, contents) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, contents, { encoding: 'utf-8' });
    });
    if (result.diagnostics.length) {
        console.error(ts.formatDiagnostics(result.diagnostics, ts.createCompilerHost(config.options)));
        return 1;
    }
    if (settings.externsPath) {
        fs.mkdirSync(path.dirname(settings.externsPath), { recursive: true });
        fs.writeFileSync(settings.externsPath, tsickle.getGeneratedExterns(result.externs, config.options.rootDir || ''));
    }
    return 0;
}
// CLI entry point
if (require.main === module) {
    process.exit(main(process.argv.splice(2)));
}
