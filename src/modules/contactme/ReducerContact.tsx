export interface IinputState {
  name: string;
  email: string;
  subject: string;
  textArea: string;
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
      return { ...state, [InputFields.NAME]: payload };
    case InputFields.EMAIL:
      return { ...state, [InputFields.EMAIL]: payload };
    case InputFields.SUBJECT:
      return { ...state, [InputFields.SUBJECT]: payload };
    case InputFields.TEXTAREA:
      return { ...state, [InputFields.TEXTAREA]: payload };
    default:
      return state;
  }
};
