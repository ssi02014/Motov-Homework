import styled from "styled-components";

export const ModalFormWrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  min-height: 500px;
  max-height: 700px;
  padding: 1rem;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 8px;
  overflow-y: auto;
`;

export const FormTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
`;

export const FormRegionTitle = styled.h3`
  margin: 30px 0 10px 0;
`;

export const FormButton = styled.button`
  margin-right: 20px;
  height: 30px;
  outline: none;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #dadada;
  }
`;

export const SelectBoxWrapper = styled.select`
  width: 150px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  font-size: 1.1rem;
`;

export const CheckBoxWrapper = styled.div`
  margin: 20px 0 15px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  height: 40px;
  border-bottom: 1px solid #999;
  border-right: 1px solid #999;

  &:nth-child(3n - 2) {
    border-left: 1px solid #999;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-top: 1px solid #999;
  }
`;

export const CheckBoxInput = styled.input`
  margin-left: 8px;
`;

export const SelectCountryWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SelectCountrySpan = styled.span`
  display: inline-block;
  width: 33%;
  height: 30px;
`;
