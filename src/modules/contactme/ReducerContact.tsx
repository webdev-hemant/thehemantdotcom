import { initialState } from "./ContactMe";

export interface IinputState {
  name: { value: string; isError: boolean };
  email: { value: string; isError: boolean };
  subject: { value: string; isError: boolean };
  textArea: { value: string; isError: boolean };
  isEverythingOkay: boolean;
}

export enum InputFields {
  NAME = "name",
  EMAIL = "email",
  SUBJECT = "subject",
  TEXTAREA = "textArea",
  VALIDATENAME = "validateName",
  VALIDATEEMAIL = "validateEmail",
  VALIDATESUBJECT = "validateSubject",
  VALIDATETEXTAREA = "validateTextArea",
  ISEVERYTHINGOKAY = "isEverythingOkay",
  RESETALL = "resetAll",
}

interface IinputAction {
  type: InputFields;
  payload: string;
}

export const ReducerContact = (state: IinputState, action: IinputAction) => {
  const { type, payload } = action;
  const { isEverythingOkay, ...restState } = state;

  switch (type) {
    case InputFields.NAME:
      return { ...state, name: { ...state.name, value: payload } };

    case InputFields.EMAIL:
      return { ...state, email: { ...state.email, value: payload } };

    case InputFields.SUBJECT:
      return { ...state, subject: { ...state.subject, value: payload } };

    case InputFields.TEXTAREA:
      return { ...state, textArea: { ...state.textArea, value: payload } };

    case InputFields.VALIDATENAME:
      return {
        ...state,
        name: { ...state.name, isError: payload.length < 3 },
      };

    case InputFields.VALIDATEEMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          isError: !/\S+@\S+\.\S+/.test(payload),
        },
      };

    case InputFields.VALIDATESUBJECT:
      return {
        ...state,
        subject: { ...state.subject, isError: payload.length < 3 },
      };

    case InputFields.VALIDATETEXTAREA:
      return {
        ...state,
        textArea: {
          ...state.textArea,
          isError: payload.length < 3,
        },
      };
    case InputFields.ISEVERYTHINGOKAY:
      const valuesNotEmty = Object.entries(restState)
        .map((item) => item[1].value)
        .every((v) => v);

      const noErrors = Object.entries(restState)
        .map((item) => item[1].isError)
        .every((v) => !v);

      return { ...state, isEverythingOkay: valuesNotEmty && noErrors };

    case InputFields.RESETALL:
      return initialState;

    default:
      return state;
  }
};
