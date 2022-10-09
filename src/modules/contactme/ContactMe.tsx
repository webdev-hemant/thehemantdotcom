import Input from "componets/input/Input";
import { useState } from "react";
import contactmeImg from "images/contactme.png";
import styles from "./contactme.module.scss";
import Image from "next/image";
import TextArea from "componets/textarea/TextArea";

interface IinputState {
  name: string;
  email: string;
  subject: string;
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
    subject: "",
    textArea: "",
  });

  const [submitPosition, setSubmitPosition] = useState<IsubmitPosition>({
    state: false,
    positionX: "0",
  });

  const handleOnchange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMouseEnter = () => {
    setSubmitPosition((prev) => ({
      positionX: prev.state ? "5rem" : "-5rem",
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
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputState.subject}
            name="subject"
            placeholder="Subject / App name"
            inputStyleName={styles.inputSubject}
          />
          <TextArea
            onChange={handleOnchange}
            value={inputState.textArea}
            name="textArea"
            placeholder="Enter description"
            textAreaStyleName={styles.inputSubject}
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
        <div className={styles.imgWrapper}>
          <Image src={contactmeImg} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
