import { Container } from "@microsoft/fast-foundation";
import { vsButton } from "./button/vs-button";

export {
    vsButton
}

export const allComponents = {
    vsButton,    
	register(container?: Container, ...rest: any[]) {
		if (!container) {
			// preserve backward compatibility with code that loops through
			// the values of this object and calls them as funcs with no args
			return;
		}

		for (const key in this) {
			if (key === 'register') {
				continue;
			}

			(this as any)[key]().register(container, ...rest);
		}
	},
}