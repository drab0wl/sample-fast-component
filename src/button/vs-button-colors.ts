import { DesignToken } from "@microsoft/fast-foundation";

export const buttonForeground = DesignToken.create<string>('button-foreground-color').withDefault('#FFFFFF');
export const buttonBackground = DesignToken.create<string>('button-background-color').withDefault('#ECECF0');
export const buttonBorder = DesignToken.create<string>('button-border-color').withDefault('#CCCEDB');
export const buttonHoverForeground = DesignToken.create<string>('button-hover-foreground-color').withDefault('#1E1E1E');
export const buttonHoverBackground = DesignToken.create<string>('button-hover-background-color').withDefault('#C9DEF5');
export const buttonHoverBorder = DesignToken.create<string>('button-hover-border-color').withDefault('#CCCEDB');
export const buttonDisabledForeground = DesignToken.create<string>('button-disabled-foreground-color').withDefault('#A2A4A5');
export const buttonDisabledBackground = DesignToken.create<string>('button-disabled-background-color').withDefault('#F5F5F5');
export const buttonDisabledBorder = DesignToken.create<string>('button-disabled-border-color').withDefault('#CCCEDB');