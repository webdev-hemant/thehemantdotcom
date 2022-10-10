import Input from "componets/input/Input";
import { useReducer, useState } from "react";
import contactmeImg from "images/contactme.png";
import Image from "next/image";
import TextArea from "componets/textarea/TextArea";
import { IinputState, InputFields, ReducerContact } from "./ReducerContact";
import styles from "./contactme.module.scss";

interface IsubmitPosition {
  state: boolean;
  positionX: string;
}

const initialState: IinputState = {
  name: "",
  email: "",
  subject: "",
  textArea: "",
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
    // isEverythingOkay &&
    //   setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
  };

  // const handleBlur = (
  //   event:
  //     | React.FocusEvent<HTMLInputElement, Element>
  //     | React.FocusEvent<HTMLTextAreaElement, Element>
  // ) => {
  //   const { name, value } = event.target;
  //   setValidateHook({ name, value });
  // };

  const handleMouseEnter = () => {
    // if (isEverythingOkay) {
    //   setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
    // } else {
    // setSubmitPosition((prev) => ({
    //   positionX: prev.state ? "5rem" : "-5rem",
    //   state: !prev.state,
    // }));
    // }
  };

  const onSubmit = () => {
    console.log(inputReducerState);
  };

  return (
    <div className={styles.contactmeWrapper}>
      <div className={styles.container}>
        <div className={styles.inputsWrapper}>
          <h1 className={styles.headingText}>Contact Me</h1>
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.name}
            name="name"
            placeholder="Name"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            // isError={validateHook.nameError}
            errorMessage="*Please atleast three characters"
            // onBlur={handleBlur}
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.email}
            name="email"
            placeholder="Email"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            // isError={validateHook.emailError}
            // onBlur={handleBlur}
          />
          <Input
            type="text"
            onChange={handleOnchange}
            value={inputReducerState.subject}
            name="subject"
            placeholder="Subject / App name"
            inputStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            // isError={validateHook.subjectError}
            errorMessage="*Please atleast three characters"
            // onBlur={handleBlur}
          />
          <TextArea
            onChange={handleOnchange}
            value={inputReducerState.textArea}
            name="textArea"
            placeholder="Enter description"
            textAreaStyleName={styles.inputCommon}
            divStyle={{ marginBottom: "1rem" }}
            // isError={validateHook.textAreaError}
            errorMessage="*Please atleast three characters"
            // onBlur={handleBlur}
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
