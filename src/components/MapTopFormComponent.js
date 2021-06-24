import React from "react";
import styled from "styled-components";

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

const MapTopFormComponent = ({ onClick }) => {
  return (
    <>
      <FormContainer>
        <InputStyle type="text"></InputStyle>
        <ButtonStyle onClick={onClick}>지역 설정</ButtonStyle>
      </FormContainer>
    </>
  );
};

export default MapTopFormComponent;
