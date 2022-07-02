import { images_list } from "../../../../config/data_config";
import ImageItem from "./ImageItem";
import styles from "./styles.module.scss";

const Images = () => {
  return (
    <div className={styles["images"]}>
      <div className="container">
        <div className={styles["images-list"]}>
          {images_list.map(({ id, imageUrl }) => {
            return <ImageItem key={id} imageUrl={imageUrl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Images;
