import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./Layout.module.scss";
import { LayoutHeader } from "widgets/LayoutHeader/LayoutHeader.tsx";

export function Layout() {
  return (
    <div>
      <header className={styles.root}>
        <LayoutHeader />
      </header>
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
