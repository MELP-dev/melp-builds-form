import { FieldError, RegisterOptions } from "react-hook-form";
import { DefaultMessages, MpControl } from "../../types/Form";
export declare function controlRegisterOptions(control: MpControl): RegisterOptions;
export declare const defaultMessages: DefaultMessages;
export declare function useErrorMessages(control: MpControl, defaultMessages: DefaultMessages, error?: FieldError): string[];
export declare function booleanDecimalPointToNumber(decimalPoint?: boolean | number): number | undefined;
