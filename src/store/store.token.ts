import { create } from 'zustand';

interface token {
  accessToken: string;
  setacessToken: (by: string) => void;
}

const HandleaccessToken = create<token>((set) => ({
  accessToken: '',
  setacessToken: (by) => {
    set((state) => ({ accessToken: by }));
  },
}));

export default HandleaccessToken;
