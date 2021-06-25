import axios from "axios";
import React, { useEffect, useState } from "react";
import MapContainer from "./containers/MapContainer";
import RegionSettingContainer from "./containers/RegionSettingContainer";
//style
import { Wrapper } from "./style/main";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [completeReigon, setCompleteRegion] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    axios
      .get(
        `https://motov-coding-homework.s3.ap-northeast-2.amazonaws.com/country.json`
      )
      .then((res) => {
        setCountryData((prev) => [...prev, res.data]);
        setLoading(true);
      });
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <>
          <RegionSettingContainer
            countryData={countryData}
            setCompleteRegion={setCompleteRegion}
          />
          <MapContainer
            countryData={countryData}
            completReigon={completeReigon}
          />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </Wrapper>
  );
}

export default App;
