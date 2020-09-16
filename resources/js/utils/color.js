export function hexToRGB(hex) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  } else if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }
  return { r, g, b };
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function RGBToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

export function lumFromRGB(r, g, b) {
  // Formula from WCAG 2.0
  let [R, G, B] = [r, g, b].map(function (c) {
    c /= 255; // to 0-1 range
    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 21.26 * R + 71.52 * G + 7.22 * B;
}

export function closestLum(lums, lum) {
  let min = 100;
  let cLum = null;
  let cIndex = null;
  for (var i = lums.length - 1; i >= 0; i--) {
    let val = Math.abs(lums[i] - lum);
    if (val < min) {
      min = val;
      cLum = lums[i];
      cIndex = i;
    }
  }
  let closest = {};
  closest[cIndex] = cLum;
  return closest;
}

export function lightnessFromHSLum(h, s, lum) {
  let lowestDiff = 100;
  let newL = 100;

  // ballpark
  for (var l = 100; l >= 0; l--) {
    let curLum = lumFromRGB(...Object.values(HSLtoRGB(h, s, l)));
    let diff = Math.abs(lum - curLum);
    if (diff < lowestDiff) {
      newL = l;
      lowestDiff = diff;
    }
  }

  // fine-tune
  for (var l = newL + 5; l >= newL - 5; l -= 0.01) {
    let curLum = lumFromRGB(...Object.values(HSLtoRGB(h, s, l)));
    let diff = Math.abs(lum - curLum);
    if (diff < lowestDiff) {
      newL = l;
      lowestDiff = diff;
    }
  }

  return newL;
}

export function HSLtoRGB(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: (r + m) * 255,
    g: (g + m) * 255,
    b: (b + m) * 255,
  };
}
