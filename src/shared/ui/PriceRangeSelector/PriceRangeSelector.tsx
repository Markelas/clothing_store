import { useState, useEffect, ChangeEvent } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./PriceRangeSelector.module.scss";
import cn from "classnames";

interface Props {
  minLimit: number;
  maxLimit: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function PriceRangeSelector({
  minLimit,
  maxLimit,
  value,
  onChange,
}: Props) {
  const [localMin, setLocalMin] = useState(value[0].toString());
  const [localMax, setLocalMax] = useState(value[1].toString());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLocalMin(value[0].toString());
    setLocalMax(value[1].toString());
  }, [value]);

  const validateAndApply = () => {
    const parsedMin = Number(localMin);
    const parsedMax = Number(localMax);

    if (isNaN(parsedMin) || isNaN(parsedMax)) {
      setError("Введите корректное значение");
      return;
    }

    if (parsedMin < minLimit || parsedMax > maxLimit) {
      setError("Цена вне допустимого диапазона");
      return;
    }

    if (parsedMin > parsedMax) {
      setError("Минимальная цена больше максимальной");
      return;
    }

    setError(null);
    onChange([parsedMin, parsedMax]);
  };

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setLocalMin(values[0].toString());
      setLocalMax(values[1].toString());
      setError(null);
      onChange([values[0], values[1]]);
    }
  };

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalMin(e.target.value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalMax(e.target.value);
  };

  return (
    <div>
      <div className={styles.rangeSlider}>
        <Slider
          range
          min={minLimit}
          max={maxLimit}
          value={[Number(localMin) || minLimit, Number(localMax) || maxLimit]}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.rangeInputs}>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            value={localMin}
            onChange={handleMinChange}
            onBlur={validateAndApply}
            placeholder="Мин."
          />
          <span className={styles.currency}>₽</span>
        </div>
        -
        <div className={styles.inputWrapper}>
          <input
            type="number"
            value={localMax}
            onChange={handleMaxChange}
            onBlur={validateAndApply}
            placeholder="Макс."
          />
          <span className={styles.currency}>₽</span>
        </div>
      </div>
      <div className={styles.errorContainer}>
        <span className={cn(styles.error, { [styles.visible]: !!error })}>
          {error}
        </span>
      </div>
    </div>
  );
}
