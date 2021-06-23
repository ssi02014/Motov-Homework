import React from "react";
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
  return (
    <Container>
      <SetRegionalComponent />
    </Container>
  );
}

export default App;
