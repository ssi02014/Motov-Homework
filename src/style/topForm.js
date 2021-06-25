import styled from "styled-components";

export const FormWrapper = styled.form`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  outline: none;
  border: 1px solid #999;
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px 8px;
`;

export const Button = styled.button`
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 8px;
  font-weight: bold;

  &:hover {
    background-color: #dadada;
  }
`;
