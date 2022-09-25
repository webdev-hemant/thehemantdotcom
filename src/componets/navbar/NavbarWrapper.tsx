import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { InavbarRoutes, navbarRoutes } from "./NavbarRoutes";
import hamburger from "images/hamburger.png";
import closeIcon from "images/close.png";
import javasriptIcon from "images/javascript.png";
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
          <div className={styles.javascriptImg}>
            <Image
              src={javasriptIcon}
              width={50}
              height={50}
              alt="javascript"
            />
          </div>
          <div onClick={() => setIsOpen(true)} className={styles.hamIcon}>
            <Image src={hamburger} width={24} height={24} alt="" />
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
      <main className={styles.mainContainer}>{children}</main>
      <MobileNavbar open={isOpen}>
        <div className={styles.mobile_nav_wrapper}>
          <div onClick={() => setIsOpen(false)} className={styles.closeHamIcon}>
            <Image src={closeIcon} width={24} height={24} alt="" />
          </div>
          <ul className={styles.mobileNavListContainer}>
            {navbarRoutes.map((item: InavbarRoutes) => (
              <li
                key={item.name}
                className={`${router.pathname === item.route && styles.active}`}
              >
                <Link href={item.route}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MobileNavbar>
    </>
  );
};

export default NavbarWrapper;
