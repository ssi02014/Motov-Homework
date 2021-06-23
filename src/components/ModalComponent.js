import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  z-index: 10;
  background-color: #fff;
`;

const SelectBoxContainer = styled.select``;

const CheckboxContainer = styled.div``;

const ModalComponent = ({ modal }) => {
  return (
    <>
      {modal ? (
        <FormContainer>
          <h1>지역 설정</h1>
          <SelectBoxContainer>
            <option value="서울특별시">서울특별시</option>
            <option value="서울특별시">경기도</option>
            <option value="서울특별시">강원도</option>
            <option value="서울특별시">강원도</option>
            <option value="서울특별시">강원도</option>
            <option value="서울특별시">강원도</option>
          </SelectBoxContainer>
          <SelectBoxContainer>
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
        </FormContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalComponent;
