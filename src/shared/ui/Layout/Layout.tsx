import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./Layout.module.scss";
import { LayoutHeader } from "widgets/LayoutHeader";

export function Layout() {
  return (
    <div className={styles.root}>
      <LayoutHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="text_sm">footer</div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
