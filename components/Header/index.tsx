import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className="container">
        <div className={styles["header__text"]}>Header</div>
      </div>
    </div>
  );
};

export default Header;
