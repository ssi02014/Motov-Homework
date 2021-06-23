import React from "react";
import styled from "styled-components";
import SetRegionalComponent from "./components/SetRegionalComponent";

function App() {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  `;

  return (
    <Container>
      <SetRegionalComponent />
    </Container>
  );
}

export default App;
