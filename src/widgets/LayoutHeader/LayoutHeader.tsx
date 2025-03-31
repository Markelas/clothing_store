import styles from "./LayoutHeader.module.scss";
import { LinkList } from "shared/ui/LinkList/LinkList.tsx";
import MainLogo from "shared/icons/dealer-main-logo.svg?react";

const links = [
  { label: "Одежда", to: "/" },
  { label: "Обувь", to: "/contacts" },
  { label: "Аксессуары", to: "/a" },
  { label: "Сумки", to: "/b" },
  { label: "Товары для спорта", to: "/aa" },
];

export function LayoutHeader() {
  return (
    <header className={styles.root}>
      <LinkList links={links} />
      <MainLogo />
    </header>
  );
}
