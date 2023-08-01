import { useEffect } from "react"

export const KakaoMap = ()=>{
    useEffect(()=>{
        let container = document.getElementById('map');
        let options = {
            center : new kakao.maps.LatLng(33.111111,126.111111),
            level: 3
        };

        let map = new kakao.maps.Map(container, options);
    },[])

    return <div id="map" style={{ width: "500px", height: "500px" }} />; 
}