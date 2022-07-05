/// <reference types="react" />
import { MpControlProps } from "../../types/Form";
export declare function NumberView({ control, size, layout, variant, error, defaultMessages, value, onChange, }: MpControlProps & {
    value: any;
    onChange: (...event: any[]) => void;
}): JSX.Element;
export default function Number(props: MpControlProps): JSX.Element;
