import MyPortal from "componets/portal/MyPortal";
import styles from "./mymodal.module.scss";

interface IProps {
  open: boolean;
  children: JSX.Element;
}

const MyModal = ({ open = false, children = <div></div> }: IProps) => {
  return open ? (
    <MyPortal selector="#mymodal">
      <div className={styles.mymodalContainer}>{children}</div>
    </MyPortal>
  ) : (
    <></>
  );
};

export default MyModal;
