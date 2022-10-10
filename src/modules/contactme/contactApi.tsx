interface IpostData {
  name: string;
  email: string;
  subject: string;
  textArea: string;
}

export const postDataContact = async ({
  name,
  email,
  subject,
  textArea,
}: IpostData) => {
  try {
    const jsonData = await fetch(
      `https://auth-backend-silk.vercel.app/contact`,
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          textArea: textArea,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await jsonData.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
