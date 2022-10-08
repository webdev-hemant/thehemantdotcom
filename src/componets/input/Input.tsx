import { useEffect, useRef, useState } from "react";
import viewPassword from "images/viewpassword.png";
import hidePassword from "images/hidepassword.png";
import Image from "next/image";
import styles from "./input.module.scss";

interface Iprops {
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (_: React.FocusEvent<HTMLInputElement>) => void;
  getRef?: (_: React.MutableRefObject<any>) => void;
  onBlur?: (_: React.FocusEvent<HTMLInputElement, Element>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  label?: string;
  inputStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
  errorMessage?: string;
  isError?: boolean;
  divStyleName?: any;
  inputStyleName?: any;
}

const Input = (props: Iprops) => {
  const inputRef = useRef<any>(null);
  const [password, setPassword] = useState<"password" | "text">("password");
  const {
    type = "text",
    placeholder = "",
    onChange,
    onFocus,
    getRef,
    onBlur,
    value,
    maxLength,
    minLength,
    required = false,
    name = "",
    inputStyle = {},
    divStyle = {},
    label = "",
    isError = false,
    errorMessage = "*Please enter valid value",
    divStyleName = "",
    inputStyleName = "",
    ...rest
  } = props;

  useEffect(() => {
    if (inputRef) getRef?.(inputRef);
  }, [getRef]);

  return (
    <div
      style={divStyle}
      className={`${divStyleName} ${styles.inputContainer}`}
    >
      <label
        onClick={() => inputRef?.current?.focus()}
        className={styles.label}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type={type === "password" ? password : type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        className={`${inputStyleName} ${styles.input} ${
          type === "password" && styles.paddingForEye
        }`}
        style={inputStyle}
        {...rest}
      />

      <div className={styles.errorWrapper}>
        <p className={styles.errorMessage}>{isError && errorMessage}</p>
      </div>

      {type === "password" && (
        <div
          onClick={() =>
            setPassword((prev) => (prev === "password" ? "text" : "password"))
          }
          className={`${styles.passwordIconWrapper} ${
            isError && styles.isError
          }`}
        >
          <Image
            src={password === "password" ? hidePassword : viewPassword}
            alt={password === "password" ? "hide password" : "view password"}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
