import React from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";

const SetRegionalComponent = () => {
  const SetRegionalContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputStyle = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #999;
    border-radius: 4px;
    margin-right: 5px;
  `;

  const ButtonStyle = styled.button`
    height: 33px;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
  `;

  return (
    <>
      <SetRegionalContainer>
        <InputStyle type="text"></InputStyle>
        <ButtonStyle>지역 설정</ButtonStyle>
      </SetRegionalContainer>
      <MapComponent />
    </>
  );
};

export default SetRegionalComponent;
