import * as colors from './vs-button-colors';
import { css } from "@microsoft/fast-element";
import { ButtonOptions, ElementDefinitionContext, } from '@microsoft/fast-foundation';

export const buttonStyles = css`
    :host {
        background-color: red;
    }
    :host(:hover) {
        background-color: ${colors.buttonHoverBackground};
        color: ${colors.buttonHoverForeground};
        border-color: ${colors.buttonHoverBorder};
    }
    :host(:disabled) {
        background-color: ${colors.buttonDisabledBackground};
        color: ${colors.buttonDisabledForeground};
        border-color: ${colors.buttonDisabledBorder};
    }
`;

// export const buttonStyles = (
// 	context: ElementDefinitionContext,
// 	definition: ButtonOptions
// ) => css`
// 	${baseButtonStyle}
// `;