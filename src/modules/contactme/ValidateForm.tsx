import { useState } from "react";
import { IinputState } from "./ContactMe";

interface Istate {
  nameError: boolean;
  emailError: boolean;
  subjectError: boolean;
  textAreaError: boolean;
}

interface IvalidateForm {
  name: string;
  value: string;
}

const ValidateForm = (inputState: IinputState) => {
  const [state, setState] = useState<Istate>({
    nameError: false,
    emailError: false,
    subjectError: false,
    textAreaError: false,
  });

  const validate = ({ name, value }: IvalidateForm): void => {
    switch (name) {
      case "name":
        setState((prev) => ({ ...prev, nameError: !(value.length >= 3) }));
        break;
      case "email":
        setState((prev) => ({
          ...prev,
          emailError: !/\S+@\S+\.\S+/.test(value),
        }));
        break;
      case "subject":
        setState((prev) => ({ ...prev, subjectError: !(value.length >= 3) }));
        break;
      case "textArea":
        setState((prev) => ({ ...prev, textAreaError: !(value.length >= 3) }));
        break;
    }
  };

  const isOkay: boolean =
    Object.values(inputState).every((v) => !!v) &&
    !Object.values(state).some((v) => v);

  return [state, validate, isOkay] as [
    Istate,
    ({ name, value }: IvalidateForm) => void,
    boolean
  ];
};

export default ValidateForm;
