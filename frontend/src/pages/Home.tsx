import { useEffect, useState } from "react";
import { useAppStore } from "@/stores/useAppStore";
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
    <div>
      <h1>Home</h1>
      {tests.map((u) => (
        <div key={u.id}>{`${u.id}:${u.name}`}</div>
      ))}
    </div>
  );
}