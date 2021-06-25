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
  width: 180px;
  outline: none;
  border: 1px solid #fdd835;
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px 8px;
`;

export const Button = styled.button`
  width: 80px;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;
  margin-right: 5px;
  font-weight: bold;
  background-color: ${(props) => (props.bgWhite ? "#fff" : "#fff9c4")};
  border: 1px solid #fdd835;

  &:hover {
    background-color: ${(props) => (props.bgWhite ? "#fffde7" : "#fff176")};
  }
`;
