import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Input from "../Input/Input"

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

      <FileDropBox>
        
      </FileDropBox>
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
</>
            )
            
        }}
      />
      
      
      <button type="submit">Submit</button>
      
       <button type="submit">Submit</button>
       <Spoiler />
    </form>
  )
}