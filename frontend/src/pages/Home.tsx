import { useAppStore } from "../stores/useAppStore";
import { fetchTest } from "../api/testApi";
import { useEffect, useState } from "react";
import { Test } from "../types/Test";

export default function Home() {
  const [tests, setTest] = useState<Test[]>([]);

  useEffect(() => {
    fetchTest().then(setTest);
  }, []);

  return (
    <div>
      <h1>Test</h1>
      {tests.map((u) => (
        <div key={u.id}>{`${u.id}:${u.name}`}</div>
      ))}
    </div>
  );
}