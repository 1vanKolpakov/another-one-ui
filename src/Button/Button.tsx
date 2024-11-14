import React, { FC, useState } from "react";
import * as stls from './Button.module.scss'
import classNames from "classnames";
// import styles from './Button.module.scss'

export interface BtnProps {
    children: React.ReactNode
    disabled?: boolean
    type?: BtnTypesEnum
    className?: string
}

export enum BtnTypesEnum {
    green='green',
    white='white',
    gold='gold',
    blue='blue',
    grey='grey',
}

const Button: FC<BtnProps> = ({ children,className, disabled, type=BtnTypesEnum.green, ...props}) => {

    return (
        <button 
        className={classNames({
            [stls.btn]: true,
            [stls[type]]: true,
        })}
        disabled={disabled}
        {...props} >
            {children}
        </button>
    );
}

export default Button;