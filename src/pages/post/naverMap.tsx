import React, { useEffect } from 'react';
import vectorIcon from '../../assets/image/detailHeart.png';

const NaverMap = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(35.8, 128.839573),
        zoom: 7,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.8, 128.839573), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
      });

      naver.maps.Event.addListener(map, 'click', function (e) {
        marker.setPosition(e.latlng);
        console.log(e.latlng);
      });
    };
    initMap();
  }, []);

  const mapStyle = {
    width: '70vw',
    height: '32vw',
  };

  return (
    <div>
      <div id="map" style={mapStyle} />
    </div>
  );
};

export default NaverMap;
