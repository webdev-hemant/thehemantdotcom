import style from "../styles/Home.module.scss";
import NavBar from "../components/navbar/NavBar";
import Intro from "../components/introduction/Intro";
const index = () => {
  return (
    <div className="Home ">
      <header className={style.header}>
        <NavBar />
        {/* <Intro /> */}
      </header>
    </div>
  );
};

export default index;
