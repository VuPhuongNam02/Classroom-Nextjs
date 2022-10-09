import create from "zustand";
import { getCookie } from "cookies-next";

export const useStore = create<any>((set: any) => ({
  auth: getCookie("auth") ? (getCookie("auth") as any) : null,
  setAuth: (newAuth: any) => set((state: any) => ({ auth: newAuth })),
}));
