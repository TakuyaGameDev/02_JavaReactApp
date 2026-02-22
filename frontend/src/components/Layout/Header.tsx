import { Outlet, Link } from "react-router-dom";
import styles from "@/styles/Layout/Header.module.scss"
import icon from "/icon.png";

type HeaderProps = {
    isLogin?: boolean;
};

export default function Header({ isLogin=false }:HeaderProps) {
  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.wrapper__link}>
          <img className={styles.icon} src={icon} alt="Zyntra icon" />
        </Link>
      </div>
    </>
  );
}