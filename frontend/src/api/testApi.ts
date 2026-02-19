import { api } from "./client";
import type { Test } from "../types/Test";

export const fetchTest = async (): Promise<Test[]> => {
  const res = await api.get<Test[]>("/test");
  return res.data;
};
