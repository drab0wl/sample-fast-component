import {
    Button,
    buttonTemplate as template,
} from "@microsoft/fast-foundation";
import { buttonStyles as styles } from "./vs-button-styles";

export const vsButton = Button.compose({
    baseName: "button",
    template,
    styles,    
	shadowOptions: {
		delegatesFocus: true,
	},
});