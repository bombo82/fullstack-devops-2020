export interface TtfCmyk {
    readonly cyan: number;
    readonly magenta: number;
    readonly yellow: number;
    readonly black: number;
}

export interface TtfHex {
    readonly hex: string;
}

export interface TtfHsl {
    readonly hue: number;
    readonly saturation: number;
    readonly lightness: number;
}

export interface TtfRgb {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
}
