import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

const MapContainer = ({ countryData, completReigon }) => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    countryData[0].maps.forEach((map) => {
      completReigon.map((el) => {
        if (el.city === map.city && el.country === map.country) {
          const data = {
            city: map.city,
            country: map.country,
            polygon: map.polygon
              .join("")
              .split("_")
              .map((el) => el.split(",")),
          };
          setDetailData((prev) => [...prev, data]);
        }
      });
    });
  }, [completReigon]);
  return (
    <>
      <MapComponent detailData={detailData} />
    </>
  );
};

export default MapContainer;
