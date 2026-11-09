// Palette names land in generated code: JS identifiers and keys, CSS/SCSS/LESS/Stylus variable names
// and SVG ids. The label box takes any text, and so does a share link's `names`, so exports only use a
// name from this set and fall back to the auto name otherwise. Same rule as grayscale-mcp's SAFE_NAME.
const SAFE_NAME = /^[A-Za-z][A-Za-z0-9_-]{0,31}$/;

export function safeName(name) {
  return typeof name === 'string' && SAFE_NAME.test(name) ? name : '';
}

// A name can hold '-' (brand-blue, or grayscale-alt from cssColors), which is fine in CSS but not in a
// JS identifier or an unquoted key. These keep the Radix and auto-dark Tailwind exports parseable.
// A reserved word (class, default, let...) can't be a const either, so it gets a leading _. No palette
// name starts with _, so _class can't clash with another palette. Same list as grayscale-mcp's.
const RESERVED = new Set(
  (
    'break case catch class const continue debugger default delete do else enum export extends false finally ' +
    'for function if import in instanceof new null return super switch this throw true try typeof var void while with ' +
    'implements interface let package private protected public static yield await arguments eval undefined NaN Infinity'
  ).split(' '),
);

export function jsIdent(name) {
  const id = name.replace(/-+(.?)/g, (_, c) => c.toUpperCase());
  return RESERVED.has(id) ? `_${id}` : id;
}

// Two names can become one Radix const (brand-blue and brandBlue, or foo-dark and foo's fooDark), and
// the export then won't load. Returns the message naming both, or '' when every const is distinct.
export function radixClash(names) {
  const owner = new Map();
  for (const name of names) {
    for (const [id, label] of [[jsIdent(name), `"${name}"`], [`${jsIdent(name)}Dark`, `"${name}" (its dark scale)`]]) {
      const other = owner.get(id);
      if (other) return `Radix writes each palette as a JavaScript const, but ${other} and ${label} would both be const ${id}. Rename one of them.`;
      owner.set(id, label);
    }
  }
  return '';
}

export function jsKey(name) {
  return /^[A-Za-z_$][\w$]*$/.test(name) ? name : `'${name}'`;
}
