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
import Switch from "@/Switch/Switch"

export default function App() {
  
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data: any) => {
      console.log(data);
    };
    // const onClickhand =(e) => {
    //   console.log(e.target.checked)
    // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <Spoiler />
      {/* <Switch onClick={onClickhand} disabled checked /> */}
    </form>
  )
}