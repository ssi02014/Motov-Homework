import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MapComponent = ({ detailData }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    detailData.map((el) => {
      const path = [];
      el.polygon.map((el) => {
        path.push(new kakao.maps.LatLng(el[1], el[0]));
      });

      dispalyArea(path, map);
    });
  }, [detailData]);

  const dispalyArea = (path, map) => {
    let polygon = new kakao.maps.Polygon({
      map: map,
      path: path,
      strokeWeight: 2,
      strokeColor: "#004c80",
      strokeOpacity: 0.8,
      strokeStyle: "solid",
      fillColor: "#fff",
      fillOpacity: 0.7,
    });
    polygon.setMap(map);
  };

  return (
    <>
      <MapWrapper id="myMap" />
    </>
  );
};

export default MapComponent;
