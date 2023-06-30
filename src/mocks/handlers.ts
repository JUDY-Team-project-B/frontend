import { rest } from 'msw';

export interface postInform {
  post_id: string;
  post_image: string;
  post_title: string;
  travel_gender: string;
  travel_age: string;
  travel_at: string;
  travel_member: number;
}

export interface destination{
  destination: string;
}

// const destinationlist: destination[] = [
//   {
//     destination: '서울특별시'
//   },
//   {
//     destination:'부산광역시'
//   },
//   {
//     destination: '대구광역시'
//   },
//   {
//     destination:'인천광역시'
//   },
//   {
//     destination: '광주광역시'
//   },
//   {
//     destination:'대전광역시'
//   },
//   {
//     destination: '울산광역시'
//   },
//   {
//     destination:'세종시'
//   },
//   {
//     destination: '경기도'
//   },
//   {
//     destination:'강원도'
//   },
//   {
//     destination: '충청북도'
//   },
//   {
//     destination:'충청남도'
//   },
//   {
//     destination: '전라북도'
//   },
//   {
//     destination:'전라남도'
//   },
//   {
//     destination: '경상북도'
//   },
//   {
//     destination:'경상남도'
//   },
//   {
//     destination: '제주도'
//   },
// ]


const postList: postInform[] = [
  {
    post_id: "1",
    post_image: "img",
    post_title:"제주도 감성 여행 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "제주도",
    travel_member: 1
  },
  {
    post_id: "2",
    post_image: "img",
    post_title:"부산 놀러 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "부산",
    travel_member: 2
  },
  {
    post_id: "3",
    post_image: "img",
    post_title:"강릉 맛집 투어 갈 사람",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "강릉",
    travel_member: 2
  },
  {
    post_id: "4",
    post_image: "img",
    post_title:"홍성근처 여행 하실분",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "충청남도 홍성",
    travel_member: 2
  },
  {
    post_id: "1",
    post_image: "img",
    post_title:"제주도 감성 여행 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "제주도",
    travel_member: 1
  },
  {
    post_id: "2",
    post_image: "img",
    post_title:"부산 놀러 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "부산",
    travel_member: 2
  },
  {
    post_id: "3",
    post_image: "img",
    post_title:"강릉 맛집 투어 갈 사람",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "강릉",
    travel_member: 2
  },
  {
    post_id: "4",
    post_image: "img",
    post_title:"홍성근처 여행 하실분",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "충청남도 홍성",
    travel_member: 2
  },
  {
    post_id: "1",
    post_image: "img",
    post_title:"제주도 감성 여행 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "제주도",
    travel_member: 1
  },
  {
    post_id: "2",
    post_image: "img",
    post_title:"부산 놀러 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "부산",
    travel_member: 2
  },
  {
    post_id: "3",
    post_image: "img",
    post_title:"강릉 맛집 투어 갈 사람",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "강릉",
    travel_member: 2
  },
  {
    post_id: "4",
    post_image: "img",
    post_title:"홍성근처 여행 하실분",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "충청남도 홍성",
    travel_member: 2
  },
  {
    post_id: "1",
    post_image: "img",
    post_title:"제주도 감성 여행 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "제주도",
    travel_member: 1
  },
  {
    post_id: "2",
    post_image: "img",
    post_title:"부산 놀러 가실분!",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "부산",
    travel_member: 2
  },
  {
    post_id: "3",
    post_image: "img",
    post_title:"강릉 맛집 투어 갈 사람",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "강릉",
    travel_member: 2
  },
  {
    post_id: "4",
    post_image: "img",
    post_title:"홍성근처 여행 하실분",
    travel_gender: "남성",
    travel_age: "20대",
    travel_at: "충청남도 홍성",
    travel_member: 2
  },
];

export const handlers = [
  rest.get('/api/v1/post/all/1', (req, res, ctx) => {
    console.log('호출됨');
    console.log(postList);
    return res(ctx.status(200), ctx.json(postList));
  }),
];

// export const handlers = [
//   rest.get('/api/v1/post/list', (req, res, ctx) => {
//     console.log('호출됨');
//     console.log(destinationlist);
//     return res(ctx.status(200), ctx.json(destinationlist));
//   }),
// ]