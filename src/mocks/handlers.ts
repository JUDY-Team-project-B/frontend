import { rest } from 'msw';
/**
  poat_id: string;
  post_image: string;
  travel_gender: string;
  travel_age: string;
  travel_at: string;
  travel_member: number;
 */

export interface postInform {
  post_id: string;
  post_image: string;
  travel_gender: string;
  travel_age: string;
  travel_at: string;
  travel_member: number;
}


const postList: postInform[] = [
  {
    post_id: "1",
    post_image: "img",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "대구",
    travel_member: 1
  },
  {
    post_id: "2",
    post_image: "img",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "서울",
    travel_member: 2
  },
  {
    post_id: "3",
    post_image: "img",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "서울",
    travel_member: 2
  },
  {
    post_id: "4",
    post_image: "img",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "서울대구부산대전여기",
    travel_member: 2
  },
];

export const handlers = [
  rest.get('/api/v1/post/all', (req, res, ctx) => {
    console.log('호출됨');
    console.log(postList);
    return res(ctx.status(200), ctx.json(postList));
  }),
];