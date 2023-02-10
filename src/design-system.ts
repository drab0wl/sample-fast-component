import { DesignSystem } from "@microsoft/fast-foundation";

export function provideVsDesignSystem(element?: HTMLElement): DesignSystem {
    return DesignSystem.getOrCreate(element).withPrefix('vs');
}