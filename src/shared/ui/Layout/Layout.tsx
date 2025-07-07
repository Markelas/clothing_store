import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./Layout.module.scss";
import { LayoutHeader } from "widgets/LayoutHeader";
import { LayoutFooter } from "widgets/Footer";

export function Layout() {
  return (
    <div className={styles.root}>
      <LayoutHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <LayoutFooter />
      <ScrollRestoration />
    </div>
  );
}
