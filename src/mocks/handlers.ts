import { rest } from 'msw';
import test from 'node:test';
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
  post_title: string;
  travel_gender: string;
  travel_age: string;
  travel_at: string;
  travel_member: number;
}

const postList: postInform[] = [
  {
    post_id: '1',
    post_image: 'img',
    post_title: '제주도 감성 여행 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '제주도',
    travel_member: 1,
    post: 'mock test mock test mock test mock test mock testmock test mock test mock test mock test mock testmock test mock test mock test mock test mock test ',
  },
  {
    post_id: '2',
    post_image: 'img',
    post_title: '부산 놀러 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '부산',
    travel_member: 2,
  },
  {
    post_id: '3',
    post_image: 'img',
    post_title: '강릉 맛집 투어 갈 사람',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '강릉',
    travel_member: 2,
  },
  {
    post_id: '4',
    post_image: 'img',
    post_title: '홍성근처 여행 하실분',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '충청남도 홍성',
    travel_member: 2,
  },
  {
    post_id: '1',
    post_image: 'img',
    post_title: '제주도 감성 여행 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '제주도',
    travel_member: 1,
  },
  {
    post_id: '2',
    post_image: 'img',
    post_title: '부산 놀러 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '부산',
    travel_member: 2,
  },
  {
    post_id: '3',
    post_image: 'img',
    post_title: '강릉 맛집 투어 갈 사람',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '강릉',
    travel_member: 2,
  },
  {
    post_id: '4',
    post_image: 'img',
    post_title: '홍성근처 여행 하실분',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '충청남도 홍성',
    travel_member: 2,
  },
  {
    post_id: '1',
    post_image: 'img',
    post_title: '제주도 감성 여행 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '제주도',
    travel_member: 1,
  },
  {
    post_id: '2',
    post_image: 'img',
    post_title: '부산 놀러 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '부산',
    travel_member: 2,
  },
  {
    post_id: '3',
    post_image: 'img',
    post_title: '강릉 맛집 투어 갈 사람',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '강릉',
    travel_member: 2,
  },
  {
    post_id: '4',
    post_image: 'img',
    post_title: '홍성근처 여행 하실분',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '충청남도 홍성',
    travel_member: 2,
  },
  {
    post_id: '1',
    post_image: 'img',
    post_title: '제주도 감성 여행 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '제주도',
    travel_member: 1,
  },
  {
    post_id: '2',
    post_image: 'img',
    post_title: '부산 놀러 가실분!',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '부산',
    travel_member: 2,
  },
  {
    post_id: '3',
    post_image: 'img',
    post_title: '강릉 맛집 투어 갈 사람',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '강릉',
    travel_member: 2,
  },
  {
    post_id: '4',
    post_image: 'img',
    post_title: '홍성근처 여행 하실분',
    travel_gender: '남성',
    travel_age: '20대',
    travel_at: '충청남도 홍성',
    travel_member: 2,
  },
];

export const handlers = [
  rest.get('/api/v1/post/all', (req, res, ctx) => {
    console.log('호출됨');
    console.log(postList);
    return res(ctx.status(200), ctx.json(postList));
  }),
];
