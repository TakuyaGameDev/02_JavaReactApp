import { Outlet, Link } from "react-router-dom";
import styles from "@/styles/Form/LoginForm.module.scss"
import TextInput from "../UI/TextInput";
import "@/styles/global.scss"

type LoginFormProps = {
    
};

export default function LoginForm({}:LoginFormProps) {
  return (
    <>
      <div className={`card ${styles.container}`}>
        <div className={styles.title}>
            LOGIN
        </div>
        <div className={styles.form__main}>
          <div className={styles.area__input}>
            <TextInput 
              label="UserID"
              type="email"
            />
          </div>
        </div>
      </div>
    </>
  );
}