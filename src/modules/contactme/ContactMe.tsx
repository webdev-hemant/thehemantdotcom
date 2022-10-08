import Input from "componets/input/Input";
import { useState } from "react";
import styles from "./contactme.module.scss";

interface IinputState {
  name: string;
  email: string;
  textArea: string;
}

const ContactMe = () => {
  const [inputState, setInputState] = useState<IinputState>({
    name: "",
    email: "",
    textArea: "",
  });
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
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
            placeholder="Please enter your name"
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputState.email}
            name="email"
            placeholder="Please enter your email"
          />
        </div>
        <div className={styles.imgWrapper}></div>
      </div>
    </div>
  );
};

export default ContactMe;
