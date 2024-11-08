import axios from "axios";
import cookie from 'react-cookies';

export const BASE_HOST = 'http://localhost:8080'
const API_VERSION = '/api/v1'
export const BASE_URL = BASE_HOST + API_VERSION

const client = axios.create({
  baseURL: BASE_URL
})


// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/refresh-token`, null, {
//       headers: {
//         Authorization: `Bearer ${cookie.load("refreshToken")}`,
//       },
//     });
    
//     const newAccessToken = response.data.accessToken;
//     cookie.save("accessToken", newAccessToken, { path: "/" });
//     return newAccessToken;
//   } catch (error) {
//     console.error("토큰 갱신 실패:", error);
//     window.location.href = "/";
//     throw error;
//   }
// };

// client.interceptors.request.use((config) => {
//   const accessToken = cookie.load("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   config.headers["Content-Type"] = "application/json";
//   return config;
// });


// client.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // 무한 루프 방지
      
//       try {
//         const newAccessToken = await refreshAccessToken();

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return client(originalRequest);
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   } 
// );



export const getUserData = async () => await client.get(
  `user/me`,{
    headers:{
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${cookie.load('accessToken')}`
    }
  }
)

export const putUserData =async (nickname:any) => await client.put(
  `user/me`,
  {
    nickname: nickname
  },
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    },
  }
)

export const sendCommentData = async (userIdData:any, postIdData:any, parentIdData:any, targetData:any) =>  await client.post(
  `comment`,
  {
    userId: userIdData,
    postId: postIdData,
    parentId: parentIdData,
    content: targetData,
  },
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    }
  }
)

export const getCommentData =async (postId:any) => await client.get(
  `comment/${postId}`,
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
)

export const putCommnetData =async (postId:any, contentData:any) => await client.put(
  `comment/${postId}`,
  {
    content:contentData
  },
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    }
  }
)

export const deleteCommentData = async (postId:any) => await client.delete(
  `comment/${postId}`,
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    }
  }
)

export const getPostData = async (postId:any) => await client.get(
  `post/${postId}`
)

export const getLogout =async () => await client.get(
  `auth/logout`
)

export const postLogin = async (email:any, password:any) =>  await client.post(
  `auth/authenticate`,
  {email, password}
)

export const getPostListData =async (page:any, Type:any,keyword:any) => await client.get(
  `post/all/${page}`,
  {
    params: {
      searchType: Type,
      searchKeyword1: keyword,
    },
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    },
  },
)

export const getLikeData =async (url:any) => await client.get(
  `post/me/like/${url}`,
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    },
  },
)

export const postLikeData =async (postId:any) => await client.post(
  `post/like`,
  {
    postId: postId,
  },
  {
    headers: {
      Authorization: `Bearer ${cookie.load('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
    },
  },
)


