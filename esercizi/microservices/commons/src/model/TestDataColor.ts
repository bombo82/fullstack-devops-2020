import {TtfCmyk, TtfHex, TtfHsl, TtfRgb} from './Color';

export interface Hex2rgbTestData {
    readonly hexValue: TtfHex;
    readonly rgbValue: TtfRgb;
}

export interface Hex2hslTestData {
    readonly hexValue: TtfHex;
    readonly hslValue: TtfHsl;
}

export interface Hex2cmykTestData {
    readonly hexValue: TtfHex;
    readonly cmykValue: TtfCmyk;
}

export interface Rgb2hexTestData {
    readonly rgbValue: TtfRgb;
    readonly hexValue: TtfHex;
}

export interface Rgb2hslTestData {
    readonly rgbValue: TtfRgb;
    readonly hslValue: TtfHsl;
}

export interface Rgb2cmykTestData {
    readonly rgbValue: TtfRgb;
    readonly cmykValue: TtfCmyk;
}

export interface Hsl2hexTestData {
    readonly hslValue: TtfHsl;
    readonly hexValue: TtfHex;
}

export interface Hsl2rgbTestData {
    readonly hslValue: TtfHsl;
    readonly rgbValue: TtfRgb;
}

export interface Hsl2cmykTestData {
    readonly hslValue: TtfHsl;
    readonly cmykValue: TtfCmyk;
}

export interface Cmyk2hexTestData {
    readonly cmykValue: TtfCmyk;
    readonly hexValue: TtfHex;
}

export interface Cmyk2rgbTestData {
    readonly cmykValue: TtfCmyk;
    readonly rgbValue: TtfRgb;
}

export interface Cmyk2hslTestData {
    readonly cmykValue: TtfCmyk;
    readonly hslValue: TtfHsl;
}
