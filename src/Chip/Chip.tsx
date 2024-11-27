import React, { FC, useState } from "react";
import * as stls from './Chip.module.scss'
import classNames from "classnames";

export interface Chip {
    value?: any
    name?: string
    disabled?: boolean
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isActive: boolean
}

const Chip: FC<Chip> = ({ value, onClick, name, disabled, isActive }) => {

    const onClickHandler = (e: any) => {
        onClick?.(e)
    }

    return (
        <button value={value} onClick={onClickHandler} disabled={disabled} className={classNames({
            [stls.container]: true,
            [stls.active]: isActive,
        })}>
            {name}
        </button>
    )
}

export default Chip