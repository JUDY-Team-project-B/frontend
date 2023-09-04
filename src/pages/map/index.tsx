/*global kakao*/ 
import React, { useEffect } from 'react';
const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b66f24006963d528fcfffc96f0493933&autoload=false&libraries==clusterer,services`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        console.log(container)
        console.log(options)
        console.log(map)

        
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default KakaoMap;