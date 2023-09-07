import HandleaccessToken from "@/store/store.token";
import cookie from 'react-cookies';

const { accessToken, setacessToken } = HandleaccessToken();

export const setToken = (accessToken: string, refreshToken: string) => {
    setacessToken(accessToken);
    const expires = new Date();
    cookie.save('refreshtokens', refreshToken, {
      path: '/',
      expires,
    });
  };