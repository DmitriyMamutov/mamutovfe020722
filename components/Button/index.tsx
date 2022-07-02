import { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: object;
};

const Button: FC<Props> = (props) => {
  const { size, children, className, onClick, id, style } = props;

  const buttonClass = cn(
    styles["button"],
    "button",
    {
      [styles["button--small"]]: size === "small",
      [styles["button--medium"]]: size === "medium",
      [styles["button--large"]]: size === "large",
    },
    className,
  );

  return (
    <button onClick={onClick} className={buttonClass} id={id} style={style}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "large",
};

export default Button;
