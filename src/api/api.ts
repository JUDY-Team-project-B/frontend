import { IPostData } from "@/components/board/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
})

export const getPostData =  (postId:string|undefined) => client.get(
  `post/${postId}`,{
    headers:{
      'Access-Control-Allow-Origin': '*',
    }
  }
).then((res) => res.data.data)

export const getUserData =  () => client.get(
  `user/1`,{
    headers:{
      
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWxsb3NAbmF2ZXIuY29tIiwiaWF0IjoxNjk2OTY1NjY5LCJleHAiOjE2OTcwNTIwNjl9.7JzJ78SXr21L7NMZqwJjzxb4aiS_uYOBn8X0lFnIfFY'
    }
  }
).then((res) => res.data.data)

export const getCommentData =  (PostId:string|undefined) => client.get(
  `comment/${PostId}`,{
    headers:{
      'Access-Control-Allow-Origin': '*',
    }
  }
).then((res) => res.data.data)



// export const getCommentList = (searchTerm:string|null) => 
//   client.get(`comment/${searchTerm}`,{
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   })




// export async function CommentListData(searchTerm:string|null): Promise<void> {
//   try {
//     const response = await axios.get(
//       `${baseURL}comment/${searchTerm}`,
//       {
//         headers: {
//           //Authorization: `Bearer ${cookie.load('accessTokens')}`,
//           'Access-Control-Allow-Origin': '*',
//         },
//       },
//     );
//     console.log(response);
//     const responseData = response.data.data;
//     if (responseData) {
//       for (let i = 0; i < responseData.length; i += 1) {
//         responseData[i].isSelect = false;
//       }
//     }
//     console.log(responseData);

//     return responseData
//   } catch (error) {
//     console.log(error);
//   }
// }