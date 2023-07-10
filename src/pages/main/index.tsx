import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trip1 from '../../assets/image/trip1.jpg';
import trip2 from '../../assets/image/trip2.jpg';
import trip3 from '../../assets/image/trip3.jpg';
import '../../assets/font/font.css';

const items = [
  { id: 1, url: trip1 },
  { id: 2, url: trip2 },
  { id: 3, url: trip3 },
];

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100rem;
  height: 35rem;
  overflow: visible;
`;

const TitleContainer = styled.div`
  margin-top: 15rem;
  margin-left: 22rem;
  width: 50rem;
  height: 5rem;
  color: #f9f4f4;
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

const TextContainer = styled.div`
  margin-left: 22rem;
  margin-top: 2rem;
  width: 50rem;
  height: 3rem;
  font-size: 1.1rem;
  overflow: visible;
  text-align: center;
  line-height: 1.5rem; //문장 상하 간격
  color: white;
  font-family: 'SUITE-Regular';
  overflow: visible;
`;

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <ImageContainer key={item.id} imageUrl={item.url}>
          <TitleContainer>
            세상의 <Highlight>다양한</Highlight> 곳을
            <br /> 세상의 <Highlight>다양한</Highlight> 사람들과 함께할 수
            있도록
          </TitleContainer>

          <TextContainer>
            새로운 사람과의 만남은 여행의 매력 중 하나입니다. <br />
            개방적이고 호기심 가득한 마음으로 다양한 사람들과 소통하고
            동행해보세요.
          </TextContainer>
        </ImageContainer>
      ))}
    </Slider>
  );
};

export default ImageSlide;
