
import React, { FC, useState } from "react";
import * as stls from './RadioGroup.module.scss'
import RadioButton, { RadioButtonType, SizeEnum } from "../RadioButton/RadioButton";
// import styles from './Button.module.scss'

export interface RadioGroup {
    title: string
    direction?: Direction
    size?: SizeEnum
    name: string
    options?: RadioButtonType[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export interface SelectProps {
//   label: string
//   options: any[] // Принимаем массив объектов любого типа
//   valueKey: string // Ключ для значений option
//   nameKey: string  // Ключ для отображаемого текста option
//   value?: any
//   name?: string
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
// }

export enum Direction {
    column='column',
    row='row'
}

const RadioGroup: FC<RadioGroup>  = ({title, direction = Direction.row, name, options = [], onChange, size=SizeEnum.small}) => {

    const onChangeHandler = (e : any) => {
        onChange?.(e)
    }

    return (

        <div className={`${stls.radioGroup} ${stls[size]}`}>
            {title && <p className={stls.title}>{title}</p>}
            <div className={`${stls.options} ${stls[direction]} `}>
                {options.map(option => (
                    <RadioButton
                        key={option.value}
                        label={option.label}
                        name={name}
                        value={option.value}
                        onChange={onChangeHandler}
                        disabled={option.disabled}
                        checked={option.checked}
                        size={size}
                    />
                ))}
            </div>
        </div>
    )
}

export default RadioGroup

{/* <label className={stls.select}>
            {label}
            <select value={value} onChange={onChangeHandler}>
                {options.map((option, index) => (
                    <option key={option[valueKey] || index} value={option[valueKey]}>
                        {option[nameKey]}
                    </option>
                ))}
            </select>
        </label> */}