import React, { useEffect, useState } from 'react';


export const Login = (is_login:boolean) =>{
    const islogin = is_login;

    if (is_login) {
        return <div>로그아웃</div>;
      } else {
        return <div>로그인</div>;
      }
}