import React, { useCallback, useEffect, useState } from "react";
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
  }, [allRegionData, completeReigon]);

  const dispalyArea = useCallback(
    (transformData, map, customOverlay, infowindow) => {
      const polygon = new kakao.maps.Polygon({
        path: transformData.path,
        strokeWeight: 3,
        strokeColor: "#008e9f",
        strokeOpacity: 0.8,
        strokeStyle: "solid",
        fillColor: "#fff",
        fillOpacity: 0.6,
      });

      kakao.maps.event.addListener(polygon, "mouseover", (e) => {
        polygon.setOptions({ fillColor: "#09f" });
        customOverlay.setMap(map);
      });

      kakao.maps.event.addListener(polygon, "mouseout", () => {
        polygon.setOptions({ fillColor: "#fff" });
        customOverlay.setMap(null);
      });

      kakao.maps.event.addListener(polygon, "click", (e) => {
        let getArea = new String(Math.floor(polygon.getArea()));

        if (getArea.length < 8) getArea = `${getArea[0]}백만`;
        else if (getArea.length < 9) getArea = `${getArea[0]}천만`;
        else if (getArea.length < 10) getArea = `${getArea[0]}억`;
        else getArea = `${getArea.substr(0, 2)}억`;

        const content = `
          <div class="info">
            <div class="title">
              ${transformData.country}
            </div>
            <div class="size">
              총 면적: 약 ${getArea}m<sup>2</sup>
            </div>
          </div>
        `;

        infowindow.setContent(content);
        infowindow.setPosition(e.latLng);
        infowindow.setMap(map);
      });

      polygon.setMap(map);
    },
    []
  );

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
