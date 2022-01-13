import { Alert, Col, Container, Row } from "react-bootstrap";
import Profile from "../components/Profile";

const index = () => {
  return (
    <div>
      <h1 className="">Something Amazing is comming!!</h1>
      <Container fluid="md">
        <Row>{/* <Col>1 of 1</Col> */}</Row>
      </Container>
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto">
            {/* <div className="lund bg-secondary">hi</div> */}
            {/* {[
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "light",
              "dark",
            ].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))} */}
            {/* <Alert variant="success">hi betichod</Alert> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
