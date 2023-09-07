import { create } from 'zustand';

interface token {
  accessToken: string;
  setaccessToken: (by: string) => void;
}

const HandleaccessToken = create<token>((set) => ({
  accessToken: '',
  setaccessToken: (by) => {
    set((state) => ({ accessToken: by }));
  },
}));

export default HandleaccessToken;
