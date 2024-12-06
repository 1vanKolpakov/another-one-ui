import React, { FC, useState } from "react";
import classNames from "classnames";
import * as stls from "./FileDropBox.module.scss";
import IconExpand from "../assets/icon/IconExpand";
import IconDoc from "../assets/icon/IconDoc/IconDoc";
import { h } from "vue";
import { log } from "console";

interface FileDropBoxProps {
	disabled?: boolean
}
const FileDropBox: FC<FileDropBoxProps> = ({disabled}) => {

const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
  if (disabled) return;
  e.preventDefault();
};

const onDragOver = (e: React.DragEvent<HTMLElement>) => {
  if (disabled) return;
  e.preventDefault();
};

const handleDrop = (e: React.DragEvent<HTMLElement>) => {
  if (disabled) return;
  e.preventDefault();
	console.log(e);
	
  const droppedFile = e.dataTransfer.files[0];

  handleFile(droppedFile);
};

const handleFile = (file: File) => {
	console.log(file);
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	console.log('handleFileChange',e);
	
	const file = e.target.files?.[0];
	if (file) {
		handleFile(file);
	}
};

  return (
    <div 
		onDrop={handleDrop}
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
		className={stls.dropBox}
		>
      <label>
				<IconDoc />
        LABLE
        <input
          placeholder="asdasd"
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept=".pdf,.docx,.pptx,.txt,.xlsx"
          multiple
        />
      </label>
    </div>
  );
};

export default FileDropBox;
