import React, { forwardRef } from "react";
import * as stls from './Switch.module.scss';
import classNames from "classnames";

export interface SwitchProps {
    value?: any;
    name?: string;
    disabled?: boolean;
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    checked?: boolean;
}

// Используем forwardRef
const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
    ({ onClick, disabled,checked}, ref) => {
    const onClickHandler = (e: any) => {
        onClick?.(e);
    };

    

    return (
        <div className={stls.switch}>
        <input disabled={disabled} onClick={onClickHandler} type="checkbox" name="" id="switch" checked={checked}/>
        <label htmlFor="switch"/>
        </div>
    );
    }
);

Switch.displayName = "Switch"; // Добавляем displayName для удобства отладки

export default Switch;
