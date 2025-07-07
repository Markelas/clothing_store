import styles from "./LayoutFooter.module.scss";
import TelegramIcon from "./icons/TelegramIcon.svg?react";
import VkIcon from "./icons/VKIcon.svg?react";
import MainLogo from "shared/icons/dealer-main-logo.svg?react";

export function LayoutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <MainLogo className={styles.mainLogo} />
          <p className={styles.description}>
            Ваш поставщик в мир лимитированного
            <br />
            ассортимента с доставкой по всему
            <br />
            миру
          </p>
          <div className={styles.social}>
            <TelegramIcon />
            <VkIcon />
          </div>
        </div>

        <div className={styles.column}>
          <h3>Каталог</h3>
          <ul>
            <li>Одежда</li>
            <li>Обувь</li>
            <li>Аксессуары</li>
            <li>Сумки</li>
            <li>Товары для спорта</li>
            <li>Pre-loved</li>
            <li>Custom</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Меню</h3>
          <ul>
            <li>О нас</li>
            <li>Продать свою одежду</li>
            <li>Консьерж</li>
            <li>Клиентский сервис</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Поддержка</h3>
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Частые вопросы</li>
            <li>Клиентский сервис</li>
            <li>Отследить заказ</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>Политика конфиденциальности</span>
        <span>Пользовательское соглашение</span>
        <a href="https://github.com/Markelas">Github Markelas</a>
        <span>info@some-email.com</span>
        <span>+7 (111) 111-11-11</span>
      </div>
    </footer>
  );
}
