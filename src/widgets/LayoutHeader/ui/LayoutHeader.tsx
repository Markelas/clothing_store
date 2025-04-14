import styles from "./LayoutHeader.module.scss";
import { LinkList } from "shared/ui/LinkList/LinkList.tsx";
import MainLogo from "shared/icons/dealer-main-logo.svg?react";
import Heart from "../icons/heart.svg?react";
import Bag from "../icons/bag.svg?react";
import Loupe from "../icons/loupe.svg?react";

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
      <MainLogo className={styles.mainLogo} />
      <div className={styles.buttons}>
        <button className={styles.button}>
          <Heart className={styles.icon} />
        </button>
        <button className={styles.button}>
          <Bag className={styles.icon} />
        </button>
        <button className={styles.button}>
          <Loupe className={styles.icon} />
        </button>
      </div>
    </header>
  );
}
