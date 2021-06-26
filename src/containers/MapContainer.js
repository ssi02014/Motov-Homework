import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

const { kakao } = window;

const MapContainer = ({ allRegionData, completeReigon }) => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    allRegionData.forEach((regionData) => {
      completeReigon.forEach((el) => {
        if (el.city === regionData.city && el.country === regionData.country) {
          const data = {
            city: regionData.city,
            country: regionData.country,
            polygon: regionData.polygon
              .join("")
              .split("_")
              .map((el) => el.split(",")),
          };
          setDetailData((prev) => [...prev, data]);
        }
      });
    });
  }, [completeReigon]);

  const dispalyArea = (transformData, map, customOverlay, infowindow) => {
    let polygon = new kakao.maps.Polygon({
      path: transformData.path,
      strokeWeight: 2,
      strokeColor: randomColor(),
      strokeOpacity: 0.8,
      strokeStyle: "solid",
      fillColor: "#fff",
      fillOpacity: 0.7,
    });

    kakao.maps.event.addListener(polygon, "mouseover", () => {
      polygon.setOptions({ fillColor: "#09f" });
      customOverlay.setMap(map);
    });

    kakao.maps.event.addListener(polygon, "mouseout", () => {
      polygon.setOptions({ fillColor: "#fff" });
      customOverlay.setMap(null);
    });

    kakao.maps.event.addListener(polygon, "click", (e) => {
      const content = `
        <div class="info">
          <div class="title">
            ${transformData.city} ${transformData.country}
          </div>
          <div class="size">
            총 면적: ${Math.floor(polygon.getArea())}m<sup>2</sup>
          </div>
        </div>
      `;

      infowindow.setContent(content);
      infowindow.setPosition(e.latLng);
      infowindow.setMap(map);
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
