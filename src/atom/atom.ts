import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

export interface User {
  is_active: boolean;
}

const { persistAtom } = recoilPersist({
  key: 'USER',
  storage: localStorage,
});

export const UUid = atom<User>({
  key: 'user',
  default: {
    is_active: false,
  },
  effects_UNSTABLE: [persistAtom],
});
