import React, { useRef, useState } from "react";
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
`;

const FormButton = styled.button`
  margin-right: 10px;
`;

const SelectBoxContainer = styled.select`
  width: 150px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  font-size: 1.1rem;
`;

const CheckboxContainer = styled.div`
  margin: 30px 0;
`;

const SelectRegionContainer = styled.div``;

const ModalComponent = ({ modal, setModal }) => {
  const [selectRegions, setSelectRegions] = useState([]);
  const checkBoxRef = useRef(null);

  const allCheckHandle = (e) => {
    e.preventDefault();

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = true;

      setSelectRegions((prev) => [...prev, el.childNodes[0].value]);
    });
  };

  const allUnCheckHandle = (e) => {
    e.preventDefault();

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;

      setSelectRegions([]);
    });
  };

  const checkHandle = (e) => {};

  const completeRegionSelect = (e) => {
    e.preventDefault();

    setModal(false);
  };

  return (
    <>
      {modal ? (
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
          <CheckboxContainer ref={checkBoxRef} onChange={checkHandle}>
            <label>
              <input type="checkbox" name="region" value="강남구" />
              강남구
            </label>
            <label>
              <input type="checkbox" name="region" value="강동구" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="region" value="성북구" />
              성북구
            </label>
            <label>
              <input type="checkbox" name="region" value="강북구" />
              강북구
            </label>
            <label>
              <input type="checkbox" name="region" value="서대문구" />
              서대문구
            </label>
          </CheckboxContainer>
          <SelectRegionContainer>
            {selectRegions.map((region, i) => {
              return <span key={i}>{region}</span>;
            })}
          </SelectRegionContainer>
          <FormButton onClick={completeRegionSelect}>지역 설정 완료</FormButton>
        </FormContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalComponent;
