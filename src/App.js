import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "./components/LoadingComponent";
import MapContainer from "./containers/MapContainer";
import RegionSettingContainer from "./containers/RegionSettingContainer";
//style
import { Wrapper } from "./style/main";
import "./App.css";

const API_URL = `https://motov-coding-homework.s3.ap-northeast-2.amazonaws.com/country.json`;

function App() {
  const [allRegionData, setAllRegionData] = useState([]);
  const [completeReigon, setCompleteRegion] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);

    axios.get(API_URL).then((res) => {
      setAllRegionData(res.data.maps);
      setLoading(true);
    });
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <>
          <RegionSettingContainer
            allRegionData={allRegionData}
            setCompleteRegion={setCompleteRegion}
          />
          <MapContainer
            allRegionData={allRegionData}
            completeReigon={completeReigon}
          />
        </>
      ) : (
        <LoadingComponent />
      )}
    </Wrapper>
  );
}

export default App;
