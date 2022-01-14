import style from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <nav className={`${style.navbar}`}>
      <ul>
        <li>Home</li>
        <li>PortFolio</li>
        <li>Contact</li>
      </ul>
      <button className="btn btn-outline-success">Contact Me</button>
    </nav>
  );
};

export default NavBar;
