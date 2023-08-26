export interface PostType {

  id: number;
  imageUrls: string;
  title: string;
  context: string;
  tags: string[];
  travelGender: string;
  travelAt: string;
  travelAge: string;
  travelDateStart: Date;
  travelDateEnd: Date;
  travelMember: number;
  content: string;
}

export interface commentType{
    children: any[];
    content: string;
    createdAt : string;
    id : number;
    isSelect: boolean;
    likeCount : number;
    nickname : string;
}