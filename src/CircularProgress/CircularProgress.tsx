import React from "react";
import * as styles from "./CircularProgress.module.scss";

interface CircularProgressProps {
  size?: number; // Размер SVG в пикселях
  strokeWidth?: number; // Толщина линии
  progress: number; // Значение прогресса (0-100)
  strokeColor?: string; // Цвет заполнения
  bgColor?: string; // Цвет фона
  textColor?: string; // Цвет текста
	withProgressText?: boolean
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 30,
  strokeWidth = 2,
  progress=0,
  strokeColor = "#4caf50",
  bgColor = "#e6e6e6",
  textColor = "#333",
	withProgressText=false
}) => {
  const radius = (size - strokeWidth) / 2; // Радиус круга
  const circumference = 2 * Math.PI * radius; // Длина окружности
  const offset = circumference - (progress / 100) * circumference; // Смещение для заполнения

  return (
    <div
      className={styles.circularProgress}
      // style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Фон круга */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          className={styles.bgCircle}
        />
        {/* Заполняющая линия */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={styles.progressCircle}
        />
        {/* Текст прогресса */}
        {withProgressText && (<text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={size / 3}
          fill={textColor}
          className={styles.progressText}
        >
          {Math.round(progress)}%
        </text>)}
      </svg>
    </div>
  );
};

export default CircularProgress;
