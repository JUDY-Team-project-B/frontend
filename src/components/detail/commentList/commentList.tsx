import { commentType } from '@/types/post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export function CommentList(searchTeam:any){

    const setIsSelect = (index:number) =>{
        setCommentData((prevData) => {
          const newData = [...prevData]; // 새로운 배열로 복사
          newData[index] = {
            ...newData[index], // 기존 객체의 속성 복사
            isSelect: !newData[index].isSelect, // isSelect 속성 업데이트
          };
          return newData;
        });
        console.log(commentData)
      }
    

    const [commentData, setCommentData] = useState<commentType[]>([    
        {
          children: [],
          content: '',
          createdAt : '',
          id : 0,
          isSelect: false,
          likeCount :0,
          nickname : '',
        }
      ]);

    useEffect(()=>{
        async function CommentListData(): Promise<void> {
            try {
              const response = await axios.get(`http://localhost:8080/api/v1/comment/${searchTerm}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    'Access-Control-Allow-Origin': '*',
                  }
                });
              console.log(response);
              const responseData = response.data.data;
              if (responseData) {
                for (let i = 0; i < responseData.length; i += 1) {
                  responseData[i].isSelect = false;
                }
              }
              console.log(responseData);
              setCommentData(responseData);
            } catch (error) {
              console.log(error);
            }
          }
    })
    
    return(
        <div>
          {commentData?.map((datas:any,index:any)=>(
            <div>
              <Comment>
                <CommentInfo>
                  {datas.nickname} {datas.createdAt}
                  {datas.nickname === myData.nickname ? '수정 삭제' : ''}
                </CommentInfo>
                <CommentContent>
                  <Text>{datas.content}</Text>
                  <button onClick={()=>setIsSelect(index)}>답글</button>
                </CommentContent>
                {data.isSelect === true ? '오' : 'ㅇ'}
              </Comment>
              <div>{datas.children?.map((comment:any,index:any)=>(
                <ChildrenComments>
                  <CommentInfo>
                    {comment.nickname} {comment.createdAt}
                  </CommentInfo>
                  <CommentContent>
                    <Text>--{comment.content}</Text>
                  </CommentContent>
                </ChildrenComments>
            ))}</div>
            </div>
          ))}
        </div>
    )
}

const Comment = styled.div`
  height:50px;
  width:45rem;
`

const CommentInfo = styled.div`
  overflow:hidden;
`

const CommentContent = styled.div`
  display:flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;

`

const ChildrenComments = styled.div`
  height:50px;
  width:45rem;
  background-color:#afbdd3
`
const Text = styled.div`
  padding:8px;
`