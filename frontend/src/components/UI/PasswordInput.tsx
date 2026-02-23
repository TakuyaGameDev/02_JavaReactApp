import React, { useState } from "react";
import "./PasswordInput.scss";

type Props = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput: React.FC<Props> = ({ label, error, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`ui-field ${error ? "error" : ""}`}>
      {label && <label className="ui-label">{label}</label>}

      <div className="password-wrapper">
        <input
          className="ui-input"
          type={visible ? "text" : "password"}
          {...props}
        />
        <span
          className="toggle"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "HIDE" : "SHOW"}
        </span>
      </div>

      {error && <span className="ui-error">{error}</span>}
    </div>
  );
};

export default PasswordInput;