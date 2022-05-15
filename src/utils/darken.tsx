function HEXToRGB(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result: RegExpExecArray | string[] =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [
      "255",
      "255",
      "255",
    ];

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function darken(hex: string) {
  const RGB = HEXToRGB(hex);

  let r: number = RGB.r;
  let g: number = RGB.g;
  let b: number = RGB.b;

  (r /= 255), (g /= 255), (b /= 255);

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let h: number = (max + min) / 2;
  let s: number = (max + min) / 2;
  let l: number = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.floor(h * 360)}, ${Math.floor(s * 100)}%, ${
    Math.floor(l * 100) < 20 ? Math.floor(l * 100) : Math.floor(l * 100) - 20
  }%)`;
}

export default darken;
