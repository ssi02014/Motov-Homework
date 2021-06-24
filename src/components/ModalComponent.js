import React from "react";
import styled from "styled-components";
import { cityName } from "../data/data";

const ModalFormContainer = styled.form`
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

const FormTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
`;

const FormRegionTitle = styled.h3`
  margin: 30px 0 10px 0;
`;

const FormButton = styled.button`
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

const SelectBoxContainer = styled.select`
  width: 150px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  font-size: 1.1rem;
`;

const CheckBoxContainer = styled.div`
  margin: 20px 0 15px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CheckBoxLabel = styled.label`
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

const CheckBoxInput = styled.input`
  margin-left: 8px;
`;

const SelectCountryContainer = styled.div`
  margin-bottom: 20px;
`;

const SelectCountrySpan = styled.span`
  display: inline-block;
  width: 33%;
  height: 30px;
`;

const ModalComponent = ({
  checkBoxRef,
  country,
  selectCity,
  selectRegions,
  onAllCheck,
  onAllUnCheck,
  onCheckCountry,
  onComplete,
  onSelectCity,
  onSelectCountry,
}) => {
  return (
    <>
      <ModalFormContainer>
        <FormTitle>지역 설정</FormTitle>
        <SelectBoxContainer onChange={onSelectCity}>
          <option value=""> 선택</option>
          {cityName.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxContainer>
        <SelectBoxContainer onChange={onSelectCountry}>
          <option value="">구 선택</option>
          {country.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxContainer>
        <FormButton onClick={onAllCheck}>전체 선택</FormButton>
        <FormButton onClick={onAllUnCheck}>선택 해제</FormButton>
        <FormRegionTitle>{selectCity}</FormRegionTitle>
        <CheckBoxContainer ref={checkBoxRef} onChange={onCheckCountry}>
          {country.map((el, idx) => {
            return (
              <CheckBoxLabel>
                <CheckBoxInput
                  key={idx}
                  type="checkbox"
                  name="region"
                  value={el}
                  id="region"
                />
                {el}
              </CheckBoxLabel>
            );
          })}
        </CheckBoxContainer>
        <SelectCountryContainer>
          {selectRegions.map((region, idx) => {
            return (
              <SelectCountrySpan key={idx}>{region.country}</SelectCountrySpan>
            );
          })}
        </SelectCountryContainer>
        <FormButton onClick={onComplete}>지역 설정 완료</FormButton>
      </ModalFormContainer>
    </>
  );
};

export default ModalComponent;
