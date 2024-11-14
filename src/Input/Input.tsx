import React, { forwardRef } from "react";
import * as stls from "./Input.module.scss";
import classNames from "classnames";

export interface InputProps {
  value?: any;
  label: string;
  error?: string;
  name: string;
  onBlur?: any;
  onFocus?: any;
  disabled?: boolean;
  onChange?: any;
  ref?: React.Ref<HTMLInputElement>; 
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onBlur,
      onFocus,
      onChange,
      label,
      error,
      name,
      disabled,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = (e: any) => {
      setFocused(true);
      onFocus?.(e);
    };

    const onBlurAct = (val: any) => {
      setFocused(false);
      onBlur?.(val);
    };

    const onChangeHandler = (e: any) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={stls.container}>
        <div className={stls.innerContainer}>
          <label
            onClick={handleFocus}
            htmlFor={name}
            className={focused || value ? stls.labelFocused : stls.label}
          >
            {label}
          </label>
          <input
            ref={ref} 
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
            {...props} // Оставляем остальные пропсы
          />
        </div>
        {error && (
          <div className={stls.errorContainer}>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
);

export default Input;
