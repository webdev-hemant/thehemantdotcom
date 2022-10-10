import { IinputState } from "./ContactMe";

export const postDataContact = async (inputState: IinputState) => {
  try {
    const jsonData = await fetch(
      `https://auth-backend-silk.vercel.app/contact`,
      {
        method: "POST",
        body: JSON.stringify({
          name: inputState.name,
          email: inputState.email,
          subject: inputState.subject,
          textArea: inputState.textArea,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await jsonData.json();
    console.log(JSON.stringify(inputState));
    console.log("api response:", data);
  } catch (error) {
    console.log(error);
  }
};
