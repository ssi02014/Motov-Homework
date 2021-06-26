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
  border: 1px solid #01727c;
  border-radius: 8px;
  overflow-y: auto;
  box-shadow: 5px 5px 5px gray;
`;

export const FormTitle = styled.h1`
  font-family: "Nanum Gothic", sans-serif;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const FormSubTitle = styled.h3`
  font-family: "Nanum Gothic", sans-serif;
  margin: 30px 0 10px 0;
`;

export const FormButton = styled.button`
  font-family: "Nanum Gothic", sans-serif;
  margin-right: 10px;
  padding: 7px 10px;
  outline: none;
  border: 1px solid #01727c;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  background-color: ${(props) => (props.bgWhite ? "#fff" : "#01a4b3")};
  color: ${(props) => (props.bgWhite ? "#00000" : "#fff")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.bgWhite ? "#e4fbfd" : "#008e9f")};
  }
`;

export const SelectBoxWrapper = styled.select`
  font-family: "Nanum Gothic", sans-serif;
  width: 170px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  font-size: 1rem;
  padding: 0 0 3px 0;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    width: 31%;
    height: 30px;
    margin: 0;
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

    button {
      position: relative;
      padding: 8px;
      background-color: #fff;
      border: none;
      cursor: pointer;
      &::after {
        position: absolute;
        content: "X";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.2rem;
      }
      &:hover {
        color: #999;
      }
    }
  }
`;
