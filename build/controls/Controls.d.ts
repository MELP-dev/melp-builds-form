import { ComponentType } from "react";
import { MpControl, MpControlProps, MpControlType, MpFormOverridablesMap } from "../types/Form";
export declare const controlMap: Record<MpControlType, ComponentType<MpControlProps>>;
export declare function useControlType(control: MpControl, overridables?: Partial<MpFormOverridablesMap>): ComponentType<MpControlProps>;
