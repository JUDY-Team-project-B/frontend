import React, { useEffect, useState } from 'react';

const NaverMap = ({ onMapClick }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  // const [mapCenter, setMapCenter] = useState(
  //   //초기 좌표 값
  //   new naver.maps.LatLng(37.5, 127.039573),
  // );

  // useEffect(() => {
  //   const initMap = () => {
  //     const newMap = new naver.maps.Map('map', {
  //       center: mapCenter,
  //       zoom: 10,
  //     });

  //     const newMarker = new naver.maps.Marker({
  //       position: mapCenter,
  //       map: newMap,
  //     });

  //     naver.maps.Event.addListener(newMap, 'click', function (e) {
  //       onMapClick(e.latlng);
  //       setMapCenter(e.latlng);
  //       setMap(newMap);
  //       setMarker(newMarker);
  //       console.log(e.latlng);
  //     });
  //   };

  //   initMap();
  // }, [onMapClick, mapCenter]);

  const mapStyle = {
    width: '66vw',
    height: '22vw',
    borderRadius: '.8rem',
  };

  return (
    <div>
      <div id="map" style={mapStyle} />
    </div>
  );
};

export default NaverMap;
