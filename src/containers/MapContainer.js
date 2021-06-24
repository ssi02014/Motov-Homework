import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

const MapContainer = ({ countryData, completReigon }) => {
  const [detailData, setDetailData] = useState([]);
  console.log(countryData);

  useEffect(() => {
    console.log(completReigon);
    countryData[0].maps.forEach((el) => {
      if (
        completReigon.includes(el.country) &&
        completReigon.includes(el.city)
      ) {
        const data = {
          city: el.city,
          country: el.country,
          polygon: el.polygon,
        };

        console.log(data);
        setDetailData((prev) => [...prev, data]);
      }
    });
  }, [completReigon]);
  return (
    <>
      <MapComponent detailData={detailData} />
    </>
  );
};

export default MapContainer;
