import React, { FC, DragEvent, ChangeEvent } from "react";
import * as stls from "./FileDropBox.module.scss";
import IconDoc from "../assets/icon/IconDoc/IconDoc";

interface FileDropBoxProps {
  children?: React.ReactNode;
  onDrop?: (files: FileList) => void; // Колбэк для события drop
  onDragLeave?: (event: DragEvent<HTMLDivElement>) => void; // Колбэк для события dragleave
  onDragOver?: (event: DragEvent<HTMLDivElement>) => void; // Колбэк для события dragover
  onFileInputClick?: (files: FileList) => void; // Колбэк для клика по input type="file"
}

const FileDropBox: FC<FileDropBoxProps> = ({
  children,
  onDrop,
  onDragLeave,
  onDragOver,
  onFileInputClick,
}) => {
  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    onDrop?.(files);
  };

  const fileinputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files; // Используем e.target.files для input
    if (files) {
      onFileInputClick?.(files);
    }
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragLeave?.(e);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragOver?.(e);
  };

  return (
    <div
      className={stls.drop}
      onDrop={onDropHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
    >
      <label className={stls.label}>
        {children}
        {!children && (
          <div className={stls.initialText}>
            <IconDoc />
            <span>
              перетащите файлы, или{" "}
              <span className={stls.greenText}>выберите на компьютере</span>
            </span>
          </div>
        )}
        <input
          type="file"
          className={stls.input}
          onChange={fileinputChange}
        />
      </label>
    </div>
  );
};

export default FileDropBox;
