import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { InavbarRoutes, navbarRoutes } from "./NavbarRoutes";
import hamburger from "images/hamburger.png";
import closeIcon from "images/close.png";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";
import styles from "./navbar.module.scss";

interface Iprops {
  children: JSX.Element;
}

const NavbarWrapper = ({ children }: Iprops) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.mobileView}>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.hamIcon}
          >
            <Image src={hamburger} width={24} height={24} />
          </div>
        </div>
        <div className={styles.desktopView}>
          {navbarRoutes.map((item: InavbarRoutes) => (
            <Link key={item.name} href={item.route}>
              <a
                className={`${router.pathname === item.route && styles.active}`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
      <main>{children}</main>
      <MobileNavbar open={isOpen}>
        <div className={styles.mobile_nav_wrapper}>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.closeHamIcon}
          >
            <Image src={closeIcon} width={24} height={24} />
          </div>
          <h2>this one nav</h2>
        </div>
      </MobileNavbar>
    </>
  );
};

export default NavbarWrapper;
