import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapContainer from "./containers/MapContainer";
import RegionSettingContainer from "./containers/RegionSettingContainer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

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
    <Container>
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
    </Container>
  );
}

export default App;
