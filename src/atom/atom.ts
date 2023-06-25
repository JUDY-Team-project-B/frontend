// // import { recoilPersist } from 'recoil-persist';
// import { atom } from 'recoil';

// interface User {
//     id: string;
//     name: string;
//     password:string;
//     is_active: boolean;
// }

// const { persistAtom } = recoilPersist({
//   key: 'USER',
//   storage: localStorage,
// });

// export const UUid = atom<User>({
//   key: 'user',
//   default: {
//     id: '',
//     name: '',
//     password:'',
//     is_active: true,
//   },
//   effects_UNSTABLE: [persistAtom],
// });