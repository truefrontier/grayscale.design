import * as Color from './color.js';

// Pasted text to a hex, or null if it isn't a color. Same rule as grayscale-mcp's parseColorInput.
// Takes 3- or 6-digit hex, or three numbers, optionally inside rgb()/rgba()/hsl()/hsla() and with an alpha that is ignored.
// Without a keyword, a % on the 2nd or 3rd number means HSL. Out-of-range values are refused, not clamped.
export function parseColor(txt) {
  const input = txt.trim();
  const hex = input.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) return '#' + (hex[1].length === 3 ? [...hex[1]].map((c) => c + c).join('') : hex[1]);
  const m = input.match(/^(?:(rgb|hsl)a?\s*\(\s*)?(-?\d*\.?\d+)\s*[,\s]\s*(-?\d*\.?\d+)(%?)\s*[,\s]\s*(-?\d*\.?\d+)(%?)(?:\s*[,/]\s*\d*\.?\d+%?)?\s*(\))?$/i);
  if (!m || !m[1] !== !m[7]) return null;
  const [a, b, c] = [m[2], m[3], m[5]].map(Number);
  const pct = !!(m[4] || m[6]);
  if (m[1] ? m[1].toLowerCase() === 'hsl' : pct) {
    if (a < 0 || a > 360 || b < 0 || b > 100 || c < 0 || c > 100) return null;
    const rgb = Color.HSLtoRGB(a % 360, b, c); // HSLtoRGB has no branch for 360
    return Color.RGBToHex(rgb.r, rgb.g, rgb.b);
  }
  if (pct || [a, b, c].some((v) => v < 0 || v > 255)) return null;
  return Color.RGBToHex(a, b, c);
}
