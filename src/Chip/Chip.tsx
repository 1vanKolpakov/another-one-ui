import React, { forwardRef } from "react";
import * as stls from './Chip.module.scss';
import classNames from "classnames";

export interface ChipProps {
    value?: any;
    name?: string;
    disabled?: boolean;
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isActive: boolean;
    error?: boolean;
}

// Используем forwardRef
const Chip = forwardRef<HTMLButtonElement, ChipProps>(
    ({ value, onClick, name, disabled, isActive, error }, ref) => {
    const onClickHandler = (e: any) => {
        onClick?.(e);
    };

    return (
        <button
        ref={ref} // Привязываем ref к кнопке
        value={value}
        onClick={onClickHandler}
        disabled={disabled}
        className={classNames({
            [stls.container]: true,
            [stls.active]: isActive,
            [stls.error]: error,
        })}
        >
            {name}
        </button>
    );
    }
);

Chip.displayName = "Chip"; // Добавляем displayName для удобства отладки

export default Chip;
