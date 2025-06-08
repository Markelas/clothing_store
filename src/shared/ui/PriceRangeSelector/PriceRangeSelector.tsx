import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./PriceRangeSelector.module.scss";

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
  const [min, setMin] = useState(value[0]);
  const [max, setMax] = useState(value[1]);

  useEffect(() => {
    setMin(value[0]);
    setMax(value[1]);
  }, [value]);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setMin(values[0]);
      setMax(values[1]);
      onChange([values[0], values[1]]);
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    if (!isNaN(newMin) && newMin >= minLimit && newMin <= max) {
      setMin(newMin);
      onChange([newMin, max]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    if (!isNaN(newMax) && newMax <= maxLimit && newMax >= min) {
      setMax(newMax);
      onChange([min, newMax]);
    }
  };

  return (
    <div>
      <div className={styles.rangeSlider}>
        <Slider
          range
          min={minLimit}
          max={maxLimit}
          value={[min, max]}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.rangeInputs}>
        <div className={styles.inputWrapper}>
          <input type="number" value={min} onChange={handleMinChange} />
          <span className={styles.currency}>₽</span>
        </div>
        -
        <div className={styles.inputWrapper}>
          <input type="number" value={max} onChange={handleMaxChange} />
          <span className={styles.currency}>₽</span>
        </div>
      </div>
    </div>
  );
}
