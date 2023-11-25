import { IPostData } from "@/components/board/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import cookie from 'react-cookies';

export const BASE_HOST = 'http://localhost:8080'
const API_VERSION = '/api/v1'
export const BASE_URL = BASE_HOST + API_VERSION

const client = axios.create({
  baseURL: BASE_URL
})


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
  `/post/all/${page}`,
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


