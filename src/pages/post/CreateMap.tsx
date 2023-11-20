import React, { useEffect } from 'react';

const NaverMap = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(37.5, 127.039573),
        zoom: 8,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
      });
    };
    initMap();
  }, []);

  const mapStyle = {
    width: '75vw',
    height: '25vw',
  };

  return (
    <div>
      <div id="map" style={mapStyle} />
    </div>
  );
};

export default NaverMap;
