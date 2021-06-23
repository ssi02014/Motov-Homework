import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
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
  border: 1px solid #999;

  &:nth-child(3n - 2),
  &:nth-child(3n - 1) {
    border-right: none;
    border-bottom: none;
  }
  &:nth-child(3n) {
    border-bottom: none;
  }
  &:last-child {
    border-right: 1px solid #999;
  }
`;

const CheckBoxInput = styled.input``;

const SelectRegionContainer = styled.div``;

const ModalComponent = ({
  selectRegions,
  allCheckHandle,
  allUnCheckHandle,
  checkHandle,
  completeRegionSelect,
  checkBoxRef,
}) => {
  return (
    <>
      <FormContainer>
        <FormTitle>지역 설정</FormTitle>
        <SelectBoxContainer>
          <option value="서울특별시">서울특별시</option>
          <option value="서울특별시">경기도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
        </SelectBoxContainer>
        <SelectBoxContainer>
          <option value="">구 선택</option>
          <option value="서울특별시">서울특별시</option>
          <option value="서울특별시">경기도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
          <option value="서울특별시">강원도</option>
        </SelectBoxContainer>
        <FormButton onClick={allCheckHandle}>전체 선택</FormButton>
        <FormButton onClick={allUnCheckHandle}>선택 해제</FormButton>
        <FormRegionTitle>서울 특별시</FormRegionTitle>
        <CheckBoxContainer ref={checkBoxRef} onChange={checkHandle}>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="강남구"
              id="region"
            />
            강남구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="강동구"
              id="region"
            />
            강동구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="성북구"
              id="region"
            />
            성북구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="강북구"
              id="region"
            />
            강북구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="서대문구"
              id="region"
            />
            서대문구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="도봉구"
              id="region"
            />
            도봉구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="구로구"
              id="region"
            />
            구로구
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              name="region"
              value="강서구"
              id="region"
            />
            강서구
          </CheckBoxLabel>
        </CheckBoxContainer>
        <SelectRegionContainer>
          {selectRegions.map((region, i) => {
            return <span key={i}>{region}</span>;
          })}
        </SelectRegionContainer>
        <FormButton onClick={completeRegionSelect}>지역 설정 완료</FormButton>
      </FormContainer>
    </>
  );
};

export default ModalComponent;
