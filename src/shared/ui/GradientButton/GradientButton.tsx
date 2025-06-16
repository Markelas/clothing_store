import { MouseEvent } from "react";
import styles from "./GradientButton.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  buttonText: string;
}
export function GradientButton({ className, onClick, buttonText }: Props) {
  return (
    <button onClick={onClick} className={cn(styles.root, className)}>
      {buttonText}
    </button>
  );
}
