import React, { FC, useState } from "react";
import * as stls from './Input.module.scss'
import classNames from "classnames";

export interface InputProps {
    value?: any
    label: string
    error?: string
    name: string
    onBlur?: any
    onFocus?: any
    disabled?: boolean
    onChange?: any
}

const Input: FC<InputProps> = ({ value, onBlur, onFocus,onChange, label, error, name,disabled, ...props }) => {

    const [focused, setFocused] = React.useState(false)

    const handleFocus = (e: any) => {
        setFocused(true)
        onFocus?.(e)
    }

    const onBlurAct = (val: any) => {
        setFocused(false)
        onBlur?.(val)
    }

    const onChangeHandler = (e: any) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={stls.container}>

            <div className={stls.innerContainer}>
                <label onClick={handleFocus}
                htmlFor={name}
                    className={focused || value ? stls.labelFocused : stls.label}
                >
                    {label}
                </label>
                <input
                    className={classNames({
                        [stls.input]: true,
                        [stls.activeInput]: value || focused,
                        [stls.errorInput]: !!error,
                    })}
                    name={name}
                    value={value}
                    onFocus={handleFocus}
                    disabled={disabled}
                    onBlur={onBlurAct}
                    onChange={onChangeHandler}
                    // placeholder={placeholder}
                    {...props} />
            </div>
            <div className={stls.errorContainer}>
                <p>{error}</p>

            </div>

        </div>

    );
}

export default Input;
