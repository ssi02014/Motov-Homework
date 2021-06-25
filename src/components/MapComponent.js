import React, { useEffect } from "react";
import { MapWrapper } from "../style/map";

const MapComponent = ({ detailData, dispalyArea, kakao }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    detailData.forEach((data) => {
      let path = [];

      data.polygon.forEach((latAndLng) => {
        path = [...path, new kakao.maps.LatLng(latAndLng[1], latAndLng[0])];
      });

      dispalyArea(path, map);
    });
  }, [detailData]);

  return (
    <>
      <MapWrapper id="myMap" />
    </>
  );
};

export default MapComponent;
