import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

const { kakao } = window;

const MapContainer = ({ countryData, completeReigon }) => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    countryData.forEach((map) => {
      completeReigon.forEach((el) => {
        if (el.city === map.city && el.country === map.country) {
          const data = {
            city: map.city,
            country: map.countr,
            polygon: map.polygon
              .join("")
              .split("_")
              .map((el) => el.split(",")),
          };
          setDetailData((prev) => [...prev, data]);
        }
      });
    });
  }, [completeReigon]);

  const dispalyArea = (path, map) => {
    let polygon = new kakao.maps.Polygon({
      map: map,
      path: path,
      strokeWeight: 2,
      strokeColor: randomColor(),
      strokeOpacity: 0.8,
      strokeStyle: "solid",
      fillColor: "#fff",
      fillOpacity: 0.7,
    });
    polygon.setMap(map);
  };

  const randomColor = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };

  return (
    <>
      <MapComponent
        detailData={detailData}
        kakao={kakao}
        dispalyArea={dispalyArea}
      />
    </>
  );
};

export default MapContainer;
