import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

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

  return (
    <>
      <MapComponent detailData={detailData} />
    </>
  );
};

export default MapContainer;
