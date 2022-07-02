import { FC} from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className="container">
      <div className={styles["footer__text"]}>
     Footer
        </div>
        </div>
    </div>
  );
};

export default Footer;
