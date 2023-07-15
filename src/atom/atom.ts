import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

export interface User {
    id: string;
    name: string;
    password:string;
    is_active: boolean;
}

const { persistAtom } = recoilPersist({
  key: 'USER',
  storage: localStorage,
});

export const UUid = atom<User>({
  key: 'user',
  default: {
    id: '',
    name: '',
    password:'',
    is_active: false,
  },
  effects_UNSTABLE: [persistAtom],
});