import chai from 'chai';
import {
    cmyk2hexTestData,
    cmyk2hslTestData,
    cmyk2rgbTestData,
    hex2cmykTestData,
    hex2hslTestData,
    hex2rgbTestData,
    hsl2cmykTestData,
    hsl2hexTestData,
    hsl2rgbTestData,
    rgb2cmykTestData,
    rgb2hexTestData,
    rgb2hslTestData
} from './colors';
import colorConverter from "color-convert";
import {CMYK, HSL, RGB} from "color-convert/conversions";
import {TtfCmyk, TtfHsl} from '../model/Color';

chai.config.includeStack = true;
const should = chai.should();

describe('Color Converter rgb2hex', () => {

    hex2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = colorConverter.hex.rgb(test.hexValue.hex);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });

    hex2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const converted = colorConverter.hex.hsl(test.hexValue.hex);
            const hsl: TtfHsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });

    hex2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const converted = colorConverter.hex.cmyk(test.hexValue.hex);
            const cmyk: TtfCmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });

    rgb2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert: RGB = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ];
            colorConverter.rgb.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });

    rgb2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert: RGB = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ] as RGB;
            const converted = colorConverter.rgb.hsl(toConvert);
            const hsl: TtfHsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });

    rgb2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const toConvert: RGB = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ] as RGB;
            const converted = colorConverter.rgb.cmyk(toConvert);
            const cmyk: TtfCmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });

    hsl2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert: HSL = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ];
            colorConverter.hsl.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });

    hsl2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert: HSL = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ];
            const converted = colorConverter.hsl.rgb(toConvert);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });

    hsl2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const toConvert: HSL = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ] as HSL;
            const converted = colorConverter.hsl.cmyk(toConvert);
            const cmyk: TtfCmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });

    cmyk2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert: CMYK = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            colorConverter.cmyk.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });

    cmyk2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const toConvert: CMYK = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            const converted = colorConverter.cmyk.rgb(toConvert);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });

    cmyk2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert: CMYK = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            const converted = colorConverter.cmyk.hsl(toConvert);
            const hsl: TtfHsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });

});
