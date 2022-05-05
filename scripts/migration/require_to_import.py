"""Converts goog.require() calls to ES-module style relative imports."""
import os
import pathlib
import re

def write_new_file(path, contents):
  # Write it back into a new file with .ts extension.
  newpath = str(path.with_suffix('.ts'))
  with open(str(path.with_suffix('.ts')), 'w') as newf:
    newf.write(contents)
    newf.truncate()

namespace_to_path = {}
#namespace_matcher = re.compile(r"goog\.declareModuleId\('(.+)'\);")
namespace_matcher = re.compile(r"goog\.module\('(.+)'\);")
for path in pathlib.Path('core').rglob('*.js'):
  with open(str(path), 'r') as f:
    for line in f:
      match = re.search(namespace_matcher, line)
      if match:
        namespace_to_path[match.group(1)] = path.with_suffix('')

require_matcher = re.compile(r"const ([A-Za-z]+) = goog\.require\('(.+)'\);")
destructured_require_matcher = re.compile(
    r"const \{(.+)\} = goog\.require\('(.+)'\);")
side_effect_require_matcher = re.compile(r"goog\.require\('(.+)'\);")

require_type_matcher = re.compile(r"const ([A-Za-z]+) = goog\.requireType\('(.+)'\);")
destructured_require_type_matcher = re.compile(
    r"const \{(.+)\} = goog\.requireType\('(.+)'\);")

# TODO: Make this work for names with underscores
exports_matcher = re.compile(r"exports.([A-Za-z]+) = (.+);")

def get_relative_path(namespace, path):
  import_path = namespace_to_path[namespace]
  relative_path = pathlib.Path(
      os.path.relpath(import_path.parent, path.parent), import_path.name)
  relative_path = './' + str(relative_path) if not str(
      relative_path).startswith('.') else relative_path
  return relative_path

for path in pathlib.Path('core').rglob('*.js'):
  with open(str(path), 'r+') as f:
    contents = f.read()
    new_contents = contents
    for line in contents.split('\n'):
      # basic require
      match = re.search(require_matcher, line)
      if match:
        import_name = match.group(1)
        namespace = match.group(2)
        relative_path = get_relative_path(namespace, path)
        new_contents = new_contents.replace(
            line, "import * as {} from '{}';".format(import_name,
                                                     relative_path))

      # basic require type
      match = re.search(require_type_matcher, line)
      if match:
        import_name = match.group(1)
        namespace = match.group(2)
        relative_path = get_relative_path(namespace, path)
        new_contents = new_contents.replace(
            line, "import type * as {} from '{}';".format(import_name,
                                                     relative_path))

      # destructured require
      match = re.search(destructured_require_matcher, line)
      if match:
        import_name = match.group(1).replace(':', ' as')
        namespace = match.group(2)
        relative_path = get_relative_path(namespace, path)
        new_contents = new_contents.replace(
            line, "import {{{}}} from '{}';".format(import_name, relative_path))

      # destructured require type
      match = re.search(destructured_require_type_matcher, line)
      if match:
        import_name = match.group(1).replace(':', ' as')
        namespace = match.group(2)
        relative_path = get_relative_path(namespace, path)
        new_contents = new_contents.replace(
            line, "import type {{{}}} from '{}';".format(import_name, relative_path))

      # require only for side effects
      match = re.search(side_effect_require_matcher, line)
      if match:
        namespace = match.group(1)
        relative_path = get_relative_path(namespace, path)
        new_contents = new_contents.replace(
            line, "import '{}';".format(relative_path))

      # module declaration
      match = re.search(namespace_matcher, line)
      if match:
        new_contents = new_contents.replace(line, "")

      # exports
      match = re.search(exports_matcher, line)
      if match:
          export_name = match.group(1)
          local_name = match.group(2)
          if local_name == export_name:
              new_contents = new_contents.replace(line, "export {{{}}};".format(export_name))
          else:
              new_contents = new_contents.replace(line, "export {{ {} as {} }};".format(local_name, export_name))
    f.seek(0)
    write_new_file(path, new_contents)