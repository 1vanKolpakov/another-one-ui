import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import * as stls from "./AsyncSearchDropdown.module.scss";
import Input from "../Input/Input";

interface AsyncSearchDropdownProps {
  fetchOptions: (query: string) => Promise<string[]>; // Функция для запроса на сервер
  selectedValue: string;
  handleChange: (selectedOption: string) => void;
  className?: string;
  name: string;
  noOptionsMessage?: string;
  label: string;
  debounceTime?: number; // Время задержки для дебаунса (в миллисекундах)
}

const AsyncSearchDropdown: FC<AsyncSearchDropdownProps> = ({
  fetchOptions,
  selectedValue,
  handleChange,
  className,
  name,
  label,
  noOptionsMessage = "Ничего не найдено",
  debounceTime = 300, // Задержка по умолчанию
}) => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option: string) => {
    setQuery("");
    handleChange(option);
    setIsOpen(false);
  };

  function toggle(e: MouseEvent) {
    setIsOpen(e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedValue) return selectedValue;
    return "";
  };

  const handleQueryChange = (query: string) => {
    setQuery(query);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      setLoading(true);
      try {
        const results = await fetchOptions(query); // Запрашиваем данные
        setOptions(results);
      } catch (error) {
        console.error("Ошибка при загрузке опций:", error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, debounceTime);
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className={stls.inputContainer}>
        <Input
          className={stls.inputer}
          label={label}
          name={name}
          ref={inputRef}
          value={getDisplayValue()}
          onChange={(e: any) => {
            handleQueryChange(e); // Обновляем запрос с дебаунсом
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
          {loading ? (
            <div className={stls.loading}>Загрузка...</div>
          ) : options.length > 0 ? (
            options.map((option, index) => (
              <div
                onClick={() => selectOption(option)}
                className={stls.content}
                key={`${name}-${index}`}
              >
                {option}
              </div>
            ))
          ) : (
            <div className={stls.noOptions}>{noOptionsMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AsyncSearchDropdown;
