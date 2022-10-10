export interface IinputState {
  name: { value: string; isError: boolean };
  email: { value: string; isError: boolean };
  subject: { value: string; isError: boolean };
  textArea: { value: string; isError: boolean };
  isEverythingOkay: boolean;
}

export enum InputFields {
  NAME = "name",
  VALIDATENAME = "validateName",
  EMAIL = "email",
  VALIDATEEMAIL = "validateEmail",
  SUBJECT = "subject",
  VALIDATESUBJECT = "validateSubject",
  TEXTAREA = "textArea",
  VALIDATETEXTAREA = "validateTextArea",
  ISEVERYTHINGOKAY = "isEverythingOkay",
}

interface IinputAction {
  type: InputFields;
  payload: string;
}

export const ReducerContact = (state: IinputState, action: IinputAction) => {
  const { type, payload } = action;

  switch (type) {
    case InputFields.NAME:
      return { ...state, name: { ...state.name, value: payload } };

    case InputFields.VALIDATENAME:
      return {
        ...state,
        name: { ...state.name, isError: payload.length < 3 },
      };

    case InputFields.EMAIL:
      return { ...state, email: { ...state.email, value: payload } };

    case InputFields.VALIDATEEMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          isError: !/\S+@\S+\.\S+/.test(payload),
        },
      };

    case InputFields.SUBJECT:
      return { ...state, subject: { ...state.subject, value: payload } };

    case InputFields.VALIDATESUBJECT:
      return {
        ...state,
        subject: { ...state.subject, isError: payload.length < 3 },
      };

    case InputFields.TEXTAREA:
      return { ...state, textArea: { ...state.textArea, value: payload } };

    case InputFields.VALIDATETEXTAREA:
      return {
        ...state,
        textArea: {
          ...state.textArea,
          isError: payload.length < 3,
        },
      };
    case InputFields.ISEVERYTHINGOKAY:
      return state;
    default:
      return state;
  }
};
