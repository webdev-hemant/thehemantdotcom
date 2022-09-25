import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: JSX.Element;
  selector: string;
}

const MyPortal = ({ children, selector = "#myportal" }: IProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(selector) || new DocumentFragment()
      )
    : null;
};

export default MyPortal;
