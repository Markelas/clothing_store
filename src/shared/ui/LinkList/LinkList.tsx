import { NavLink } from "react-router-dom";
import styles from "./LinkList.module.scss";

type LinkItem = {
  label: string;
  to: string;
};

interface LinkListProps {
  links: LinkItem[];
}

export function LinkList({ links }: LinkListProps) {
  return (
    <nav className={styles.nav}>
      {links.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
