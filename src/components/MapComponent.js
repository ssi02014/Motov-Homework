import React, { useEffect } from "react";
//style
import { MapWrapper } from "../style/map";

const MapComponent = ({ detailData, dispalyArea, kakao }) => {
  useEffect(() => {
    //kakao map 생성
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 11,
    };
    const map = new kakao.maps.Map(container, options);
    const customOverlay = new kakao.maps.CustomOverlay({});
    const infowindow = new kakao.maps.InfoWindow({ removable: true });

    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    detailData.forEach((data) => {
      let transformData = {
        city: data.city,
        country: data.country,
        path: [],
      };

      data.polygon.forEach((latAndLng) => {
        transformData = {
          ...transformData,
          path: [
            ...transformData.path,
            new kakao.maps.LatLng(latAndLng[1], latAndLng[0]),
          ],
        };
      });

      dispalyArea(transformData, map, customOverlay, infowindow);
    });
  }, [detailData]);

  return (
    <>
      <MapWrapper id="myMap" />
    </>
  );
};

export default MapComponent;
