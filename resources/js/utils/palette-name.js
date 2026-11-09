// Palette names land in generated code: JS identifiers and keys, CSS/SCSS/LESS/Stylus variable names
// and SVG ids. The label box takes any text, and so does a share link's `names`, so exports only use a
// name from this set and fall back to the auto name otherwise. Same rule as grayscale-mcp's SAFE_NAME.
const SAFE_NAME = /^[A-Za-z][A-Za-z0-9_-]{0,31}$/;

export function safeName(name) {
  return typeof name === 'string' && SAFE_NAME.test(name) ? name : '';
}
