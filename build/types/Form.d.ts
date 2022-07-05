import { ComponentType } from "react";
import { Control, FieldError, FieldErrors, RegisterOptions, UseFormMethods } from "react-hook-form";
export declare enum MpControlType {
    number = "number",
    text = "text",
    multiline = "multiline",
    group = "group",
    switch = "switch"
}
export declare type GridSpan = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
export interface MpControlValidations {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}
export declare type ValidationKeys = "required" | "min" | "max" | "minLength" | "maxLength" | "pattern";
export declare type DefaultMessages = Record<ValidationKeys, (control: MpControl) => string>;
export interface MpControl {
    key?: string;
    type: MpControlType;
    label?: string;
    placeholder?: string;
    endAdornment?: string;
    startAdornment?: string;
    required?: boolean;
    validations?: MpControlValidations;
    messages?: Partial<Record<ValidationKeys, string>>;
    span?: {
        xs?: GridSpan;
        sm?: GridSpan;
        md?: GridSpan;
        lg?: GridSpan;
        xl?: GridSpan;
    };
    children?: MpControl[];
    format?: string;
    negative?: boolean;
    decimalPoint?: number | boolean;
    locale?: string;
}
export interface MpControlProps {
    control: MpControl;
    size?: "small" | "medium";
    layout?: "combined" | "separated";
    variant?: "outlined" | "standard" | "filled";
    register(options?: RegisterOptions): any;
    error?: FieldError;
    hookFormControl: Control;
    errors?: FieldErrors;
    locale?: string;
    defaultMessages: DefaultMessages;
    overridables?: Partial<MpFormOverridablesMap>;
}
export interface MpFormType {
    controls: MpControl[];
    size?: "small" | "medium";
    layout?: "combined" | "separated";
    variant?: "outlined" | "standard" | "filled";
    locale?: string;
}
export interface MpFormSubmitArguments {
    values?: any;
}
export interface MpFormProps extends MpFormType, MpFormInputProps {
}
export interface MpFormInputProps {
    useFormMethods: UseFormMethods;
    classes?: MpFormClasses;
    translations?: MpFormTranslations;
    overridables?: Partial<MpFormOverridablesMap>;
    defaultMessages?: Partial<DefaultMessages>;
}
export interface MpFormClasses {
}
export interface MpFormTranslations {
}
export interface MpFormOverridablesMap {
    controls: Record<string, ComponentType<MpControlProps>>;
}
