import React, { FC, useState } from "react";
import * as stls from './RadioButton.module.scss'
import classNames from "classnames";
// import styles from './Button.module.scss'

export interface RadioButtonType {
    value: string
    name: string
    disabled?: boolean
    checked?: boolean
    size?: SizeEnum
    label: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error? : boolean
}

export enum SizeEnum {
    large='large',
    small='small'
}

const RadioButton: FC<RadioButtonType>  = ({value, name,label, disabled, checked, size=SizeEnum.large, onChange, error}) => {

    const onChangeHandler = (e : any) => {
        onChange?.(e)
    }

    return (
        <div 
        className={classNames({
            [stls.container]: true,
            [stls[size]]: size,
            [stls.error]: error,
        })}
        // className={`${stls.container} ${stls[size]}`}
        >
            <input onChange={onChangeHandler} className={stls.input} checked={checked} disabled={disabled} name={name} id={value} value={value} type='radio'/>
            <label htmlFor={value}>{label}</label>
        </div>
    )
}

export default RadioButton