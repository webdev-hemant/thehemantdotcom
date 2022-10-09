import Input from "componets/input/Input";
import { useState } from "react";
import styles from "./contactme.module.scss";

interface IinputState {
  name: string;
  email: string;
  textArea: string;
}
interface IsubmitPosition {
  state: boolean;
  positionX: string;
}

const ContactMe = () => {
  const [inputState, setInputState] = useState<IinputState>({
    name: "",
    email: "",
    textArea: "",
  });

  const [submitPosition, setSubmitPosition] = useState<IsubmitPosition>({
    state: false,
    positionX: "0",
  });

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMouseEnter = () => {
    setSubmitPosition((prev) => ({
      positionX: `${prev.state ? "5rem" : "-5rem"}`,
      state: !prev.state,
    }));
  };

  return (
    <div className={styles.contactmeWrapper}>
      <div className={styles.container}>
        <div className={styles.inputsWrapper}>
          <h1 className={styles.headingText}>Contact Me</h1>
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputState.name}
            name="name"
            placeholder="Name"
            inputStyleName={styles.inputName}
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputState.email}
            name="email"
            placeholder="Email"
            inputStyleName={styles.inputEmail}
          />
          <div className={styles.submitWrapper}>
            <button
              style={{ transform: `translateX(${submitPosition.positionX})` }}
              onMouseEnter={() => handleMouseEnter()}
            >
              Submit
            </button>
          </div>
        </div>
        <div className={styles.imgWrapper}></div>
      </div>
    </div>
  );
};

export default ContactMe;
