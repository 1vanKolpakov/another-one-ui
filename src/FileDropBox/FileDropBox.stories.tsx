import styles from './FileDropBox.module.scss';

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FileDropBox from './FileDropBox';

const meta: Meta<typeof FileDropBox> = {
  title: 'Shared/FileDropBox',
  component: FileDropBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FileDropBox>;

// Стория по умолчанию
export const DefaultFileDropBox: Story = {
  args: {
    onDrop: (files) => alert(`Файлы добавлены: ${Array.from(files).map((f) => f.name).join(', ')}`),
  },
};

// Стория с кастомным текстом
export const CustomText: Story = {
  args: {
    children: <div>Кастомный текст: выберите файлы для загрузки</div>,
    onDrop: (files) => alert(`Файлы выбраны: ${Array.from(files).map((f) => f.name).join(', ')}`),
  },
};

// Стория для DragOver
export const DragOverExample: Story = {
  args: {
    children: <div>Перетащите файлы сюда!</div>,
    onDragOver: () => console.log('Файл находится над компонентом'),
    onDrop: (files) => console.log(`Файлы выбраны: ${Array.from(files).map((f) => f.name).join(', ')}`),
  },
};

// Стория с отключённым состоянием
export const EmptyDropBox: Story = {
  args: {
    onDragOver: () => console.log('DragOver вызван, но компонент недоступен'),
    onDrop: () => alert('Файлы не могут быть загружены.'),
    onDragLeave: () => console.log('Файл покинул область DropBox'),
  },
};

// Стория с множественным выбором файлов
export const MultiFileUpload: Story = {
  args: {
    children: <div>Перетащите несколько файлов или выберите их вручную</div>,
    onDrop: (files) =>
      alert(
        `Загружено файлов: ${files.length}\nСписок: ${Array.from(files)
          .map((f) => f.name)
          .join(', ')}`
      ),
  },
};
