import React, {ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef} from "react";
import css from './button.module.css';
import {cls} from "@/utils/cls";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
function Button(props: Props, ref?: ForwardedRef<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={cls(css.button, props.className)}
            ref={ref}
            type={props.type ?? 'button'}
        />
    );
}

export default React.forwardRef(Button);