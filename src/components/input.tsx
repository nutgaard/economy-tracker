import React, {DetailedHTMLProps, ForwardedRef, InputHTMLAttributes} from "react";
import { cls } from "@/utils/cls";
import css from './input.module.css';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}
function Input(props: Props, ref?: ForwardedRef<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={cls(css.input, props.className)}
            ref={ref}
        />
    );
}

export default React.forwardRef(Input);