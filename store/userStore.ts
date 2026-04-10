import { create } from "zustand";

export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface UserStore {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => {
    set({ users });
  },
}));
