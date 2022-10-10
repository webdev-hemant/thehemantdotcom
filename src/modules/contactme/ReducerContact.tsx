export interface IinputState {
  name: { value: string; isError: boolean };
  email: { value: string; isError: boolean };
  subject: { value: string; isError: boolean };
  textArea: { value: string; isError: boolean };
}

export enum InputFields {
  NAME = "name",
  EMAIL = "email",
  SUBJECT = "subject",
  TEXTAREA = "textArea",
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
    case InputFields.EMAIL:
      return { ...state, email: { ...state.email, value: payload } };
    case InputFields.SUBJECT:
      return { ...state, subject: { ...state.subject, value: payload } };
    case InputFields.TEXTAREA:
      return { ...state, textArea: { ...state.textArea, value: payload } };
    default:
      return state;
  }
};
