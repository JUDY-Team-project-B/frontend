import { create } from 'zustand';

interface token {
  accessToken: string;
  setacessToken: (by: string) => void;
}

const AccessToken = create<token>((set) => ({
  accessToken: '',
  setacessToken: (by) => {
    set((state) => ({ accessToken: by }));
  },
}));
