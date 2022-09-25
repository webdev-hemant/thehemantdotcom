import Link from "next/link";
import { useRouter } from "next/router";
import { InavbarRoutes, navbarRoutes } from "./NavbarRoutes";
import styles from "./navbar.module.scss";

interface Iprops {
  children: JSX.Element;
}

const NavbarWrapper = ({ children }: Iprops) => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav_container}>
        {navbarRoutes.map((item: InavbarRoutes) => (
          <Link href={item.route}>
            <a className={`${router.pathname === item.route && styles.active}`}>
              {item.name}
            </a>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </>
  );
};

export default NavbarWrapper;
