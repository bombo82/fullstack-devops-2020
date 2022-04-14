import {
    Cmyk2hexTestData,
    Cmyk2hslTestData,
    Cmyk2rgbTestData,
    Hex2cmykTestData,
    Hex2hslTestData,
    Hex2rgbTestData,
    Hsl2cmykTestData,
    Hsl2hexTestData,
    Hsl2rgbTestData,
    Rgb2cmykTestData,
    Rgb2hexTestData,
    Rgb2hslTestData
} from '../model/TestDataColor';

export const hex2rgbTestData: Hex2rgbTestData[] = [
    {rgbValue: {red: 255, green: 0, blue: 0}, hexValue: {hex: 'FF0000'}},
    {rgbValue: {red: 255, green: 191, blue: 0}, hexValue: {hex: 'FFBF00'}},
    {rgbValue: {red: 128, green: 255, blue: 0}, hexValue: {hex: '80FF00'}},
    {rgbValue: {red: 0, green: 255, blue: 64}, hexValue: {hex: '00FF40'}},
    {rgbValue: {red: 0, green: 255, blue: 255}, hexValue: {hex: '00FFFF'}},
    {rgbValue: {red: 0, green: 64, blue: 255}, hexValue: {hex: '0040FF'}},
    {rgbValue: {red: 128, green: 0, blue: 255}, hexValue: {hex: '8000FF'}},
    {rgbValue: {red: 255, green: 0, blue: 191}, hexValue: {hex: 'FF00BF'}},
    {rgbValue: {red: 255, green: 0, blue: 64}, hexValue: {hex: 'FF0040'}}
];

export const hex2hslTestData: Hex2hslTestData[] = [
    {hslValue: {hue: 0, saturation: 100, lightness: 50}, hexValue: {hex: 'FF0000'}},
    {hslValue: {hue: 45, saturation: 100, lightness: 50}, hexValue: {hex: 'FFBF00'}},
    {hslValue: {hue: 90, saturation: 100, lightness: 50}, hexValue: {hex: '80FF00'}},
    {hslValue: {hue: 135, saturation: 100, lightness: 50}, hexValue: {hex: '00FF40'}},
    {hslValue: {hue: 180, saturation: 100, lightness: 50}, hexValue: {hex: '00FFFF'}},
    {hslValue: {hue: 225, saturation: 100, lightness: 50}, hexValue: {hex: '0040FF'}},
    {hslValue: {hue: 270, saturation: 100, lightness: 50}, hexValue: {hex: '8000FF'}},
    {hslValue: {hue: 315, saturation: 100, lightness: 50}, hexValue: {hex: 'FF00BF'}},
    {hslValue: {hue: 345, saturation: 100, lightness: 50}, hexValue: {hex: 'FF0040'}}
];

export const hex2cmykTestData: Hex2cmykTestData[] = [
    {hexValue: {hex: 'FF0000'}, cmykValue: {cyan: 0, magenta: 100, yellow: 100, black: 0}},
    {hexValue: {hex: 'FFBF00'}, cmykValue: {cyan: 0, magenta: 25, yellow: 100, black: 0}},
    {hexValue: {hex: '80FF00'}, cmykValue: {cyan: 50, magenta: 0, yellow: 100, black: 0}},
    {hexValue: {hex: '00FF40'}, cmykValue: {cyan: 100, magenta: 0, yellow: 75, black: 0}},
    {hexValue: {hex: '00FFFF'}, cmykValue: {cyan: 100, magenta: 0, yellow: 0, black: 0}},
    {hexValue: {hex: '0040FF'}, cmykValue: {cyan: 100, magenta: 75, yellow: 0, black: 0}},
    {hexValue: {hex: '8000FF'}, cmykValue: {cyan: 50, magenta: 100, yellow: 0, black: 0}},
    {hexValue: {hex: 'FF00BF'}, cmykValue: {cyan: 0, magenta: 100, yellow: 25, black: 0}},
    {hexValue: {hex: 'FF0040'}, cmykValue: {cyan: 0, magenta: 100, yellow: 75, black: 0}}
];

export const rgb2hexTestData: Rgb2hexTestData[] = hex2rgbTestData;

export const rgb2hslTestData: Rgb2hslTestData[] = [
    {rgbValue: {red: 255, green: 0, blue: 0}, hslValue: {hue: 0, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 191, blue: 0}, hslValue: {hue: 45, saturation: 100, lightness: 50}},
    {rgbValue: {red: 128, green: 255, blue: 0}, hslValue: {hue: 90, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 255, blue: 64}, hslValue: {hue: 135, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 255, blue: 255}, hslValue: {hue: 180, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 64, blue: 255}, hslValue: {hue: 225, saturation: 100, lightness: 50}},
    {rgbValue: {red: 128, green: 0, blue: 255}, hslValue: {hue: 270, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 0, blue: 191}, hslValue: {hue: 315, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 0, blue: 64}, hslValue: {hue: 345, saturation: 100, lightness: 50}}
];
export const rgb2cmykTestData: Rgb2cmykTestData[] = [
    {rgbValue: {red: 255, green: 0, blue: 0}, cmykValue: {cyan: 0, magenta: 100, yellow: 100, black: 0}},
    {rgbValue: {red: 255, green: 191, blue: 0}, cmykValue: {cyan: 0, magenta: 25, yellow: 100, black: 0}},
    {rgbValue: {red: 128, green: 255, blue: 0}, cmykValue: {cyan: 50, magenta: 0, yellow: 100, black: 0}},
    {rgbValue: {red: 0, green: 255, blue: 64}, cmykValue: {cyan: 100, magenta: 0, yellow: 75, black: 0}},
    {rgbValue: {red: 0, green: 255, blue: 255}, cmykValue: {cyan: 100, magenta: 0, yellow: 0, black: 0}},
    {rgbValue: {red: 0, green: 64, blue: 255}, cmykValue: {cyan: 100, magenta: 75, yellow: 0, black: 0}},
    {rgbValue: {red: 128, green: 0, blue: 255}, cmykValue: {cyan: 50, magenta: 100, yellow: 0, black: 0}},
    {rgbValue: {red: 255, green: 0, blue: 191}, cmykValue: {cyan: 0, magenta: 100, yellow: 25, black: 0}},
    {rgbValue: {red: 255, green: 0, blue: 64}, cmykValue: {cyan: 0, magenta: 100, yellow: 75, black: 0}}
];

export const hsl2hexTestData: Hsl2hexTestData[] = [
    {hslValue: {hue: 0, saturation: 100, lightness: 50}, hexValue: {hex: 'FF0000'}},
    {hslValue: {hue: 45, saturation: 100, lightness: 50}, hexValue: {hex: 'FFBF00'}},
    {hslValue: {hue: 90, saturation: 100, lightness: 50}, hexValue: {hex: '80FF00'}},
    {hslValue: {hue: 135, saturation: 100, lightness: 50}, hexValue: {hex: '00FF40'}},
    {hslValue: {hue: 180, saturation: 100, lightness: 50}, hexValue: {hex: '00FFFF'}},
    {hslValue: {hue: 225, saturation: 100, lightness: 50}, hexValue: {hex: '0040FF'}},
    {hslValue: {hue: 270, saturation: 100, lightness: 50}, hexValue: {hex: '7F00FF'}},
    {hslValue: {hue: 315, saturation: 100, lightness: 50}, hexValue: {hex: 'FF00BF'}},
    {hslValue: {hue: 345, saturation: 100, lightness: 50}, hexValue: {hex: 'FF0040'}}
];

export const hsl2rgbTestData: Hsl2rgbTestData[] = [
    {rgbValue: {red: 255, green: 0, blue: 0}, hslValue: {hue: 0, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 191, blue: 0}, hslValue: {hue: 45, saturation: 100, lightness: 50}},
    {rgbValue: {red: 128, green: 255, blue: 0}, hslValue: {hue: 90, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 255, blue: 64}, hslValue: {hue: 135, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 255, blue: 255}, hslValue: {hue: 180, saturation: 100, lightness: 50}},
    {rgbValue: {red: 0, green: 64, blue: 255}, hslValue: {hue: 225, saturation: 100, lightness: 50}},
    {rgbValue: {red: 127, green: 0, blue: 255}, hslValue: {hue: 270, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 0, blue: 191}, hslValue: {hue: 315, saturation: 100, lightness: 50}},
    {rgbValue: {red: 255, green: 0, blue: 64}, hslValue: {hue: 345, saturation: 100, lightness: 50}}
];

export const hsl2cmykTestData: Hsl2cmykTestData[] = [
    {hslValue: {hue: 0, saturation: 100, lightness: 50}, cmykValue: {cyan: 0, magenta: 100, yellow: 100, black: 0}},
    {hslValue: {hue: 45, saturation: 100, lightness: 50}, cmykValue: {cyan: 0, magenta: 25, yellow: 100, black: 0}},
    {hslValue: {hue: 90, saturation: 100, lightness: 50}, cmykValue: {cyan: 50, magenta: 0, yellow: 100, black: 0}},
    {hslValue: {hue: 135, saturation: 100, lightness: 50}, cmykValue: {cyan: 100, magenta: 0, yellow: 75, black: 0}},
    {hslValue: {hue: 180, saturation: 100, lightness: 50}, cmykValue: {cyan: 100, magenta: 0, yellow: 0, black: 0}},
    {hslValue: {hue: 225, saturation: 100, lightness: 50}, cmykValue: {cyan: 100, magenta: 75, yellow: 0, black: 0}},
    {hslValue: {hue: 270, saturation: 100, lightness: 50}, cmykValue: {cyan: 50, magenta: 100, yellow: 0, black: 0}},
    {hslValue: {hue: 315, saturation: 100, lightness: 50}, cmykValue: {cyan: 0, magenta: 100, yellow: 25, black: 0}},
    {hslValue: {hue: 345, saturation: 100, lightness: 50}, cmykValue: {cyan: 0, magenta: 100, yellow: 75, black: 0}}
];

export const cmyk2hexTestData: Cmyk2hexTestData[] = hex2cmykTestData;

export const cmyk2rgbTestData: Cmyk2rgbTestData[] = rgb2cmykTestData;

export const cmyk2hslTestData: Cmyk2hslTestData[] = hsl2cmykTestData;
