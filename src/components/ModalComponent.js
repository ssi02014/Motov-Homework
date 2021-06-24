import React from "react";
import styled from "styled-components";
import { cityName } from "../data/data";

const ModalFormContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  padding: 1rem;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 8px;
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
  /* display: inline-block; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  height: 40px;
  border-top: 1px solid #999;
`;

const CheckBoxInput = styled.input``;

const SelectRegionContainer = styled.div``;

const ModalComponent = ({
  checkBoxRef,
  modal,
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
      {modal ? (
        <ModalFormContainer>
          <FormTitle>지역 설정</FormTitle>
          <SelectBoxContainer onChange={onSelectCity}>
            <option value="">시 선택</option>
            {cityName.map((el, i) => (
              <option value={el} key={i}>
                {el}
              </option>
            ))}
          </SelectBoxContainer>
          <SelectBoxContainer onChange={onSelectCountry}>
            <option value="">구 선택</option>
            {country.map((el, i) => (
              <option value={el} key={i}>
                {el}
              </option>
            ))}
          </SelectBoxContainer>
          <FormButton onClick={onAllCheck}>전체 선택</FormButton>
          <FormButton onClick={onAllUnCheck}>선택 해제</FormButton>
          <FormRegionTitle>{selectCity}</FormRegionTitle>
          <CheckBoxContainer ref={checkBoxRef} onChange={onCheckCountry}>
            {country.map((el, i) => {
              return (
                <CheckBoxLabel>
                  <CheckBoxInput
                    key={i}
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
          <SelectRegionContainer>
            {selectRegions.map((region, i) => {
              return <span key={i}>{region}</span>;
            })}
          </SelectRegionContainer>
          <FormButton onClick={onComplete}>지역 설정 완료</FormButton>
        </ModalFormContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalComponent;
