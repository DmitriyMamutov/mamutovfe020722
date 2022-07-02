/* eslint-disable @next/next/no-img-element */
import { FC, useRef, useState } from "react";
import styles from "../styles.module.scss";
import Button from "../../../../../components/Button";

type Props = {
  id?: string;
  imageUrl?: string;
};

const ImageItem: FC<Props> = (props) => {
  const { id, imageUrl } = props;
  const [color, setColor] = useState("#F3F5FA");

  const image = useRef<HTMLDivElement>(null);

  const imageAnimation = () => {
    if (image && image.current) {
      image.current.style.transform = `scale(${
        Math.random() * (1 - 0.5) + 0.5
      })`;
    }
  };

  const changeColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    setColor(bgColor);
  };

  const onClick = () => {
    imageAnimation(), changeColor();
  };

  return (
    <div key={id} className={styles["images-list-item"]}>
      <div key={id} className={styles["images-list-item__image"]} ref={image}>
        <img src={imageUrl} alt={id} />
      </div>
      <Button onClick={onClick} style={{ background: color }}>
        Click
      </Button>
    </div>
  );
};

export default ImageItem;
