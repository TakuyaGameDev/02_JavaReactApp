import { create } from "zustand";

type AppState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
}));
