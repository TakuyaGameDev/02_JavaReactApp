import { useEffect, useState } from "react";
import { useAppStore } from "@/stores/useAppStore";
import style from "@/styles/Page/Home.module.scss"
import LoginForm from "@/components/Form/LoginForm";
import { fetchTest } from "@/api/testApi";
import type { Test } from "@/types/Test";

export default function Home() {
  const [tests, setTest] = useState<Test[]>([]);

  useEffect(() => {
    fetchTest()
      .then(setTest)
      .catch(console.error);
  }, []);

  return (
    <div className={style.container}>
      <LoginForm />
    </div>
  );
}