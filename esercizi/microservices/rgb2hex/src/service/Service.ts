import colorConverter from 'color-convert'
import {TtfHex, TtfRgb} from '../../../commons/src/model/Color'

export function convert(color: TtfRgb): TtfHex {
    const convertedColor = colorConverter.rgb.hex(color.red, color.green, color.blue);
    return {hex: convertedColor} as TtfHex;
}
