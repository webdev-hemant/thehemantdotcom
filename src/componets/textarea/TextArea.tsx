import { useEffect, useRef } from "react";
import styles from "./textarea.module.scss";

interface Iprops {
  // type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  onChange: (_: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (_: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
  getRef?: (_: React.MutableRefObject<any>) => void;
  onBlur?: (_: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
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
  textAreaStyleName?: any;
}

const TextArea = (props: Iprops) => {
  const inputRef = useRef<any>(null);
  const {
    // type = "text",
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
    errorMessage = `*Please enter valid ${name}`,
    divStyleName = "",
    textAreaStyleName = "",
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
      <textarea
        ref={inputRef}
        // type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        className={`${textAreaStyleName} ${styles.textArea}`}
        style={inputStyle}
        {...rest}
      />

      <div className={styles.errorWrapper}>
        <p className={styles.errorMessage}>{isError && errorMessage}</p>
      </div>
    </div>
  );
};

export default TextArea;
