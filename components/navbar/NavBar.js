import style from "./NavBar.module.scss";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={`${style.navbar} container-fluid`}>
      <div className="row g-0">
        <div className="col-sm-4 col-lg-3 text-center">
          <Link href={`/about`}>
            <a className={`${style.nav_brand}`}>Hemant</a>
          </Link>
        </div>
        <div className="col-sm-5 col-lg-6 d-flex">
          <ul className="mx-auto">
            <li>Home</li>
            <li>PortFolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-sm-3 col-lg-3 text-center d-none d-sm-block">
          <button className={`${style.nav_contact_btn}`}>Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
