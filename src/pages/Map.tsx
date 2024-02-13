import exp from "constants";
import { useEffect } from "react";

const KMap = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "400px", height: "400px" }} />
    </div>
  );
}

export default KMap