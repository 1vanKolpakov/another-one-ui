import React, { forwardRef } from "react";
import * as stls from "./RadioGroup.module.scss";
import RadioButton, {
    RadioButtonType,
    SizeEnum,
} from "../RadioButton/RadioButton";

export interface RadioGroupProps {
    title: string;
    direction?: Direction;
    size?: SizeEnum;
    name: string;
    options?: RadioButtonType[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

export enum Direction {
    column = "column",
    row = "row",
}

// Используем forwardRef
const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
(
    {
        title,
        direction = Direction.row,
        name,
        options = [],
        onChange,
        size = SizeEnum.small,
        error,
    },
    ref
    ) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div
        ref={ref} // Прикрепляем ref сюда
        className={`${stls.radioGroup} ${stls[size]}`}
        >
        {title && <p className={stls.title}>{title}</p>}
        <div className={`${stls.options} ${stls[direction]}`}>
            {options.map((option) => (
            <RadioButton
                key={option.value}
                label={option.label}
                name={name}
                value={option.value}
                onChange={onChangeHandler}
                disabled={option.disabled}
                checked={option.checked}
                size={size}
                error={error}
            />
            ))}
        </div>
    </div>
    );
}
);

RadioGroup.displayName = "RadioGroup"; // Добавляем displayName для отладки

export default RadioGroup;
