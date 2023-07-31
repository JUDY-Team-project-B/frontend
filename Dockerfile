#base image
#docker hub에서 image를 pull (node version 17에 issue)
FROM --platform=linux/amd64 node:alpine

#작업을 수행할 디렉토리를 지정
WORKDIR /app/frontend

COPY ./package.json /app/frontend/

# 이미지가 빌드 될때 실행
RUN npm install

#현재 경로에 있는 것을 app으로 복사
COPY . /app/frontend/

CMD ["npm", "run", "dev"]