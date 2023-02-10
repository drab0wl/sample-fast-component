
import { vsButton } from "./button/vs-button";
import { fastCard} from '@microsoft/fast-components'
import { provideVsDesignSystem } from "./design-system";


provideVsDesignSystem()
    .register(
        vsButton(),
        fastCard()
    );