/// <reference types="react" />
import { Control, FieldError, FieldErrors, RegisterOptions } from "react-hook-form";
import { DefaultMessages, MpControl, MpFormOverridablesMap } from "../../types/Form";
interface Props {
    control: MpControl;
    size?: "small" | "medium";
    layout?: "combined" | "separated";
    noLabel?: boolean;
    variant?: "outlined" | "standard" | "filled";
    register(options?: RegisterOptions): any;
    error?: FieldError;
    errors?: FieldErrors;
    locale?: string;
    hookFormControl: Control;
    overridables?: Partial<MpFormOverridablesMap>;
    defaultMessages: DefaultMessages;
}
export default function MpFormControl({ register, control, size, layout, noLabel, variant, locale, error, errors, hookFormControl, defaultMessages, overridables, }: Props): JSX.Element;
export {};
