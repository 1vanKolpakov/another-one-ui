import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Input from "../Input/Input"
import { useMaskito } from "@maskito/react"

import * as stls from './app.module.scss'
import SearchDropdown from "../SearchDropdown/SearchDropdown"
import Button from "../Button/Button"
import AsyncSearchDropdown from "../SearchDropdown/AsyncSearchDropdown"
import Spoiler from "../Spoiler/Spoiler"
import FileDropBox from "../FileDropBox/FileDropBox"
import CircularProgress from "../CircularProgress/CircularProgress"
import IconDoc from "../assets/icon/IconDoc/IconDoc"

export default function App() {

    const withMaskitoRegister = (registerResult:any, maskitoRef:any) => {
  
        const ref = (node:any) => {
          registerResult.ref(node)
          maskitoRef(node)
        }
        return {
          ...registerResult,
          ref,
          onInput: registerResult.onChange,
          onChange: undefined
        }
      }
    const { control, handleSubmit, formState: { errors } } = useForm();

    


    const onSubmit = (data: any) => {
      console.log(data);
    };

    const digitsOnlyMask = {
        mask: /^\d+$/,
    };

    const inputRef = useMaskito({options: digitsOnlyMask});


    const options = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
      { id: 4, name: "Option 4" },
      { id: 5, name: "Option 5" },
    ];


    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option: any) => {
    console.log('option',option);
    
    setSelectedOption(option);
  };

  const xhr = new XMLHttpRequest();

// Указываем метод и URL
xhr.open('GET', 'https://run.mocky.io/v3/8f5e265c-bd0a-4539-bc1f-8a4e28a03028', true);

// Обработчик для ответа
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Response:', xhr.responseText); // Здесь обрабатываем успешный ответ
  } else {
    console.error('Error:', xhr.status, xhr.statusText); // Здесь обрабатываем ошибки
  }
};

// Обработчик ошибок сети
xhr.onerror = function () {
  console.error('Network Error');
};

// Отправляем запрос
xhr.send();




  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FileDropBox />
      <CircularProgress progress={90} />
      <IconDoc />
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        
        render={({ field }) => (
            <>
          <Input
            {...field} // Перекидываем все поля для работы с react-hook-form
            label="Name"
            error={errors.name?.message as string} // Сообщение об ошибке
            className={stls.inpt}
          />
          </>
        )}
      />
      
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } }}
        render={({ field }) => {
            return (
<>
            <input
            {...withMaskitoRegister(field, inputRef)}
        
            placeholder="Enter a number"
        />
{errors.email?.message && <p>{errors.email?.message as string}</p>}
</>
            )
            
        }}
      />
      
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } }}
        render={({ field }) => {
          // Применяем маску для телефона, используя useMaskito
          const maskito = useMaskito({options: digitsOnlyMask});

          return (
            <Input
            //   {...field}
            {...withMaskitoRegister(field, inputRef)} // Применяем маску с помощью withMaskitoRegister
              label="Phone"
              error={errors.phone?.message?.toString()}
              
            />
          );
        }}
      />
      
      <button type="submit">Submit</button>
      {/* <AsyncSearchDropdown /> */}
        {/* <SearchDropdown
        handleChange={handleOptionChange}
        options={[
          "Республика Адыгея",
          "Республика Башкортостан",
          "Республика Бурятия",
          "Республика Алтай",
          "Республика Дагестан",
          "Республика Ингушетия",
          "Кабардино-Балкарская Республика",
          "Республика Калмыкия",
          "Карачаево-Черкесская Республика",
          "Республика Карелия",
          "Республика Коми",
          "Республика Марий Эл",
          "Республика Мордовия",
          "Республика Саха (Якутия)",
          "Республика Северная Осетия - Алания",
          "Республика Татарстан (Татарстан)",
          "Республика Тыва",
          "Удмуртская Республика",
          "Республика Хакасия",
          "Чеченская Республика",
          "Чувашская Республика - Чувашия",
          "Алтайский край",
          "Краснодарский край",
          "Красноярский край",
          "Приморский край",
          "Ставропольский край",
          "Хабаровский край",
          "Амурская область",
          "Архангельская область",
          "Астраханская область",
          "Белгородская область",
          "Брянская область",
          "Владимирская область",
          "Волгоградская область",
          "Вологодская область",
          "Воронежская область",
          "Ивановская область",
          "Иркутская область",
          "Калининградская область",
          "Калужская область",
          "Камчатский край",
          "Кемеровская область",
          "Кировская область",
          "Костромская область",
          "Курганская область",
          "Курская область",
          "Ленинградская область",
          "Липецкая область",
          "Магаданская область",
          "Московская область",
          "Мурманская область",
          "Нижегородская область",
          "Новгородская область",
          "Новосибирская область",
          "Омская область",
          "Оренбургская область",
          "Орловская область",
          "Пензенская область",
          "Пермский край",
          "Псковская область",
          "Ростовская область",
          "Рязанская область",
          "Самарская область",
          "Саратовская область",
          "Сахалинская область",
          "Свердловская область",
          "Смоленская область",
          "Тамбовская область",
          "Тверская область",
          "Томская область",
          "Тульская область",
          "Тюменская область",
          "Ульяновская область",
          "Челябинская область",
          "Забайкальский край",
          "Ярославская область",
          "г. Москва",
          "г. Санкт-Петербург",
          "Еврейская автономная область",
          "Ненецкий автономный округ",
          "Ханты-Мансийский АО - Югра",
          "Чукотский автономный округ",
          "Ямало-Ненецкий автономный округ",
          "Республика Крым",
          "г. Севастополь",
          "Запорожская область",
          "Донецкая Народная Республика",
          "Луганская Народная Республика",
          "Херсонская область"
      ]
      } />
      <Button disabled >asdasd</Button>
      <SearchDropdown
      options={options.map((option) => option.name)}
      name="dropdown"
      label="name"
      id="dropdown1"
      selectedVal={selectedOption}
      handleChange={handleOptionChange}
      placeholder="Search..."
      className="custom-dropdown"
       /> */}
       <button type="submit">Submit</button>
       <Spoiler />
    </form>
  )
}