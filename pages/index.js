import { Alert, Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import style from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
const index = () => {
  return (
    <div className="Home">
      <header>
        <NavBar />
      </header>
    </div>
  );
};

export default index;
