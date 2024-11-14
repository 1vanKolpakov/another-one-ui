import React from "react"
import { Controller, useForm } from "react-hook-form"
import Input from "../Input/Input"
import { useMaskito } from "@maskito/react"

export default function App() {

    const withMaskitoRegister = (registerResult, maskitoRef) => {
  
        const ref = (node) => {
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

    console.log(errors);
    


    const onSubmit = (data: any) => {
      console.log(data);
    };

    const digitsOnlyMask = {
        mask: /^\d+$/,
    };

    const inputRef = useMaskito({options: digitsOnlyMask});



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            console.log(errors.name);
            
            return (
<>
            <input
            {...withMaskitoRegister(field, inputRef)}
        
            placeholder="Enter a number"
        />
{errors.email?.message && <p>{errors.email?.message}</p>}
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
    </form>
  )
}