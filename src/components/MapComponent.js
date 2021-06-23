import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapComponent = () => {
  const MapStyle = styled.div`
    width: 100%;
    height: 100vh;
  `;

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <MapStyle id="myMap" />
    </>
  );
};

export default MapComponent;
