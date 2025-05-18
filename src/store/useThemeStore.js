import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light",
  setTheme: (newState) => set({ theme: newState }),
}));

export default useThemeStore;
