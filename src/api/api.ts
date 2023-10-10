import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
})

export const getCommentList = (searchTerm:string|null) => 
  client.get(`comment/${searchTerm}`,{
    headers: {
      //Authorization: `Bearer ${cookie.load('accessTokens')}`,
      'Access-Control-Allow-Origin': '*',
    },
  })

export const getPostData = (searchTerm:string|null) =>
  client.get(`post/${searchTerm}`,{
    headers: {
      //Authorization: `Bearer ${cookie.load('accessTokens')}`,
      'Access-Control-Allow-Origin': '*',
    },
  })


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