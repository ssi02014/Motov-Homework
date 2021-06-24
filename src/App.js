import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SetRegionalComponent from "./components/SetRegionalComponent";

const Container = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get(
        `https://motov-coding-homework.s3.ap-northeast-2.amazonaws.com/country.json`,
        config
      )
      .then((res) => {
        setCountryData((prev) => [...prev, res.data]);
      });
  }, []);

  return (
    <Container>
      <SetRegionalComponent countryData={countryData} />
    </Container>
  );
}

export default App;
