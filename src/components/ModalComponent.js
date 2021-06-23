import React from "react";
import styled from "styled-components";

const FormTitle = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 1rem;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 8px;
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
  margin-top: 30px;
`;

const selectRegionContainer = styled.div``;

const ModalComponent = ({ modal }) => {
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
          <CheckboxContainer>
            <label>
              <input type="checkbox" name="color" value="blue" />
              강남구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
            <label>
              <input type="checkbox" name="color" value="red" />
              강동구
            </label>
          </CheckboxContainer>
          <selectRegionContainer>
            <span>강남구</span>
            <span>마포구</span>
            <span>종로구</span>
            <span>서초구</span>
          </selectRegionContainer>
        </FormContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalComponent;
