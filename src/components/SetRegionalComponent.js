import React, { useState } from "react";
import styled from "styled-components";
import MapContainer from "../containers/MapContainer";

const FormContainer = styled.form`
  position: fixed;
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
  outline: none;
  border: 1px solid #999;
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px 8px;
`;

const ButtonStyle = styled.button`
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 8px;
  font-weight: bold;

  &:hover {
    background-color: #dadada;
  }
`;

const SetRegionalComponent = ({ countryData }) => {
  const [modal, setModal] = useState(false);

  const onClick = (e) => {
    e.preventDefault();

    console.log(countryData);
    setModal(true);
  };

  return (
    <>
      <FormContainer>
        <InputStyle type="text"></InputStyle>
        <ButtonStyle onClick={onClick}>지역 설정</ButtonStyle>
      </FormContainer>
      <MapContainer modal={modal} setModal={setModal} />
    </>
  );
};

export default SetRegionalComponent;
