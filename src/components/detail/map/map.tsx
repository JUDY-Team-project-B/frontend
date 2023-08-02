import { useEffect, useState } from "react"
import { Map } from "react-kakao-maps-sdk";

export const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      style={{ width: "500px", height: "500px" }}
    >
    </Map>
  );
};



/* 
declare global {
    interface Window {
      kakao: any;
    }
  }

export const KakaoMap = ()=>{

    var [mapView, setMapView] = useState<any>('')

    useEffect(()=>{
        let container = document.getElementById('map');
        let options = {
            center : new window.kakao.maps.LatLng(33.450701,126.570667),
            level: 3
        };

        var map = new window.kakao.maps.Map(container, options);
        console.log(map)
        setMapView(map)
        var center = map.getCenter(); 
        console.log(center)

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;
            
            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
             
            var resultDiv = document.getElementById('result'); 
            resultDiv.innerHTML = message;
            
        });
        
    },[])



    return <div id="map" style={{ width: "100vw", height: "50vh" }} />; 
} */