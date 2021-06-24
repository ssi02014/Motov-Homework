import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const MapComponent = ({ detailData, sampleData }) => {
  const [polygonDatas, setPolygonDatas] = useState([]);

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
    const path = [];

    detailData.map((el) => {
      el.polygon.map((el) => {
        path.push(new kakao.maps.LatLng(el[1], el[0]));
      });
    });

    // let polygon = new kakao.maps.Polygon({
    //   map: map,
    //   path: polygonPath, // 그려질 다각형의 좌표 배열입니다
    //   strokeWeight: 2, // 선의 두께입니다
    //   strokeColor: "#004c80", // 선의 색깔입니다
    //   strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    //   strokeStyle: "solid", // 선의 스타일입니다
    //   fillColor: "#fff", // 채우기 색깔입니다
    //   fillOpacity: 0.7, // 채우기 불투명도 입니다
    // });

    // console.log(polygonPath);
    // console.log(path);
    // console.log(polygon);
    // polygon.setMap(map);

    dispalyArea(path, map);
  }, [detailData]);

  const dispalyArea = (path, map) => {
    let polygon = new kakao.maps.Polygon({
      map: map,
      path: path, // 그려질 다각형의 좌표 배열입니다
      strokeWeight: 2, // 선의 두께입니다
      strokeColor: "#004c80", // 선의 색깔입니다
      strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
      fillColor: "#fff", // 채우기 색깔입니다
      fillOpacity: 0.7, // 채우기 불투명도 입니다
    });
    console.log(path);
    console.log(sampleData);
    console.log(polygon);
    polygon.setMap(map);
  };

  return (
    <>
      <MapStyle id="myMap" />
    </>
  );
};

export default MapComponent;
