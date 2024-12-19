import React, { FC, RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import classNames from "classnames";
import * as stls  from "./SearchDropdown.module.scss";
import Input from "../Input/Input";

interface SearchDropdownProps {
  options: string[];
  selectedValue: string;
  handleChange: (selectedOption: string) => void;
  className?: string;
  name: string;
  noOptionsMessage?: string;
  label: string
  error?: string
  ref?: React.Ref<HTMLInputElement>;
}
export interface SearchDropdownRef {
  focus: () => void;
  blur: () => void;
}

const SearchDropdown = React.forwardRef<SearchDropdownRef,SearchDropdownProps> (({
  options = [],
  selectedValue,
  handleChange,
  className,
  name,
  label,
  error,
  noOptionsMessage='Ничего не найдено'
},
ref
) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option: string) => {
    setQuery("");
    handleChange(option);
    setIsOpen(!isOpen);
  };

  function toggle(e: MouseEvent) {
    setIsOpen(e.target === inputRef.current);
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus(); // Фокус на внутренний инпут
    },
    blur: () => {
      inputRef.current?.blur(); // Снятие фокуса
    },
  }));

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedValue) return selectedValue;

    return "";
  };

  const filter = (options: string[]) => {
    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className={stls.inputContainer}>
        <Input
          error={error}
          className={stls.inputer}
          label={label}
          name={name}
          ref={inputRef as RefObject<HTMLInputElement>}
          value={getDisplayValue()}
          onChange={(e: any) => {
            setQuery(e);
            handleChange(null as any);
          }}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => toggle(e as any)}
        />

        <div
          className={classNames({
            [stls.options]: true,
            [stls.opened]: isOpen,
          })}
        >
          {filter(options).length > 0 ? (
            filter(options).map((option, index) => {
              return (
                <div
                  onClick={() => selectOption(option)}
                  className={stls.content}
                  key={`${name}-${index}`}
                >
                  {option}
                </div>
              );
            })
          ) : (
            <div className={stls.noOptions}>{noOptionsMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
});


export default SearchDropdown;