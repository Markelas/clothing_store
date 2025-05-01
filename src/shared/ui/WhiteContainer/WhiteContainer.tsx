import styles from "./WhiteContainer.module.scss";
import { ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export function WhiteContainer({ children, className }: Props) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
