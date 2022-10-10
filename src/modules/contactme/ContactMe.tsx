import Input from "componets/input/Input";
import { useReducer, useState } from "react";
import contactmeImg from "images/contactme.png";
import Image from "next/image";
import TextArea from "componets/textarea/TextArea";
import { IinputState, InputFields, ReducerContact } from "./ReducerContact";
import styles from "./contactme.module.scss";
import { postDataContact } from "./contactApi";

interface IsubmitPosition {
  state: boolean;
  positionX: string;
}

export const initialState: IinputState = {
  name: { value: "", isError: false },
  email: { value: "", isError: false },
  subject: { value: "", isError: false },
  textArea: { value: "", isError: false },
  isEverythingOkay: false,
};

const ContactMe = () => {
  const [inputReducerState, dispatch] = useReducer(
    ReducerContact,
    initialState
  );

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
    dispatch({ type: name as InputFields, payload: value });
    dispatch({ type: InputFields.ISEVERYTHINGOKAY, payload: "" });
    inputReducerState.isEverythingOkay &&
      setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
  };

  const handleBlur = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        dispatch({ type: InputFields.VALIDATENAME, payload: value });
        break;
      case "email":
        dispatch({ type: InputFields.VALIDATEEMAIL, payload: value });
        break;
      case "subject":
        dispatch({ type: InputFields.VALIDATESUBJECT, payload: value });
        break;
      case "textArea":
        dispatch({ type: InputFields.VALIDATETEXTAREA, payload: value });
        break;
    }
    dispatch({ type: InputFields.ISEVERYTHINGOKAY, payload: "" });
  };

  const handleMouseEnter = () => {
    if (inputReducerState.isEverythingOkay) {
      setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
    } else {
      setSubmitPosition((prev) => ({
        positionX: prev.state ? "5rem" : "-5rem",
        state: !prev.state,
      }));
    }
  };

  const onSubmit = async () => {
    if (inputReducerState.isEverythingOkay) {
      const { name, email, subject, textArea } = inputReducerState;
      const apiData = await postDataContact({
        name: name.value,
        email: email.value,
        subject: subject.value,
        textArea: textArea.value,
      });
      console.log({ inputReducerState });
      console.log({ apiData });
      dispatch({ type: InputFields.RESETALL, payload: "" });
    } else {
      setSubmitPosition((prev) => ({
        positionX: prev.state ? "5rem" : "-5rem",
        state: !prev.state,
      }));
    }
  };

  return (
    <div className={styles.contactmeWrapper}>
      <div className={styles.container}>
        <div className={styles.inputsWrapper}>
          <h1 className={styles.headingText}>Contact Me</h1>
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.name.value}
            name="name"
            placeholder="Name"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            isError={inputReducerState.name.isError}
            errorMessage="*Please atleast three characters"
            onBlur={handleBlur}
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.email.value}
            name="email"
            placeholder="Email"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            isError={inputReducerState.email.isError}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.subject.value}
            name="subject"
            placeholder="Subject / App name"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            isError={inputReducerState.subject.isError}
            errorMessage="*Please atleast three characters"
            onBlur={handleBlur}
          />
          <TextArea
            onChange={handleOnchange}
            value={inputReducerState.textArea.value}
            name="textArea"
            placeholder="Enter description"
            textAreaStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            isError={inputReducerState.textArea.isError}
            errorMessage="*Please atleast three characters"
            onBlur={handleBlur}
          />
          <div className={styles.submitWrapper}>
            <button
              style={{ transform: `translateX(${submitPosition.positionX})` }}
              onClick={() => onSubmit()}
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
