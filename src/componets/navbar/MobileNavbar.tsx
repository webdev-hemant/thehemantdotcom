import MyPortal from "componets/portal/MyPortal";

interface IProps {
  open: boolean;
  children: JSX.Element;
}

const MobileNavbar = ({ open = false, children = <div></div> }: IProps) => {
  return open ? (
    <MyPortal selector="#mobileNavbar">{children}</MyPortal>
  ) : (
    <></>
  );
};

export default MobileNavbar;
