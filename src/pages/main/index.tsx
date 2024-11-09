import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Content from './Contents';
import trip1 from '../../assets/image/trip1.jpg';
import '../../assets/font/font.css';
import { useNavigate } from 'react-router-dom';


interface ImageContainerProps {
  imageUrl: string;
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100rem;
  height: 33.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    aspect-ratio: 16 / 3;
  }

  /* 태블릿 */
  @media (max-width: 1199px) and (min-width: 768px) {
    aspect-ratio: 4 / 3;
    height: auto;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    aspect-ratio: 1 / 1;
    height: auto;
  }
`;

const StyledImage = styled.img.attrs(() => ({
  loading: 'eager',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-top: 13rem;
  width: 100%;
  height: 5rem;
  color: #f9f4f4;
  justify-content: center;
  line-height: 2rem;
  font-weight: 1000;
  font-size: 1.8rem;
  text-align: center;
  font-family: 'SUITE-Regular';
  overflow: visible;
`;

const Highlight = styled.span`
  color: #3baaf8;
  font-weight: 1000;
`;

const WriteButton = styled.button`
  width: 200px;
  height: 120px;
  background-color: #3baaf8;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  transition: transform 0.7s;
  &:hover {
    background-color: #55b2f5;
    cursor: pointer;
    transform: scale(1.03);
  }
  z-index: 999;
`;

const WriteLayout = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  overflow: visible;
  text-align: center;
  line-height: 1.5rem;
  color: white;
  font-family: 'SUITE-Regular';
  overflow: visible;
`;

const Layout = styled.div`
  height: 100%;
`

  interface ImageItem {
  id: number;
  url: string | null;
}
const initialItems: ImageItem[] = [
  { id: 1, url: trip1 },
  { id: 2, url: null },
  { id: 3, url: null },
];

const Main = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<any[]>(initialItems);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const gotoWrite = () => {
    navigate('/create-post');
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        setTimeout(async () => {
          const trip2Module = await import('../../assets/image/trip2.jpg');
          setImages((prevImages) =>
            prevImages.map((img) =>
              img.id === 2 ? { ...img, url: trip2Module.default } : img
            )
          );
        }, 4000);

        setTimeout(async () => {
          const trip3Module = await import('../../assets/image/trip3.jpg');
          setImages((prevImages) =>
            prevImages.map((img) =>
              img.id === 3 ? { ...img, url: trip3Module.default } : img
            )
          );
        }, 8000);
      } catch (error) {
        console.error('이미지 로드 실패:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <Layout>
      <Slider {...settings}>
        {images.map((item) => (
          <ImageWrapper key={item.id}>
          <StyledImage rel="preload" src={item.url || trip1} alt={`Trip ${item.id}`} />     
          <Overlay>
          <TitleContainer>
              세상의 <Highlight>다양한</Highlight> 곳을
              <br /> 세상의 <Highlight>다양한</Highlight> 사람들과{' '}
              <Highlight>함께</Highlight>할 수 있도록
            </TitleContainer>

            <TextContainer>
              새로운 사람과의 만남은 여행의 매력 중 하나입니다. <br />
              개방적이고 호기심 가득한 마음으로 다양한 사람들과 소통하고
              동행해보세요.
            </TextContainer>
            <WriteLayout>
              <WriteButton onClick={gotoWrite}>동행 찾기</WriteButton>
            </WriteLayout>
            </Overlay>
          </ImageWrapper>
        ))}
      </Slider>
      <Content />
    </Layout>
  );
};

export default Main;
