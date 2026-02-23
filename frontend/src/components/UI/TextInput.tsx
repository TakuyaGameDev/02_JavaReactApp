import React, { useState } from "react";
import styles from "@/styles/UI/TextInput.module.scss";

type Props = {
  label?: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({ label, type="text", error }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`${styles.wrapper} ${focused ? styles.focused : ""}`}>
            <input 
                type={type}
                onFocus={() => setFocused(true)}
                onBlur={(e) => setFocused(e.target.value !== "" ? true : false)}
            />
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default TextInput;