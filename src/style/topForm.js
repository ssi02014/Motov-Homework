import styled from "styled-components";

export const FormWrapper = styled.form`
  position: fixed;
  left: 3%;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  z-index: 10;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px gray;

  img {
    width: 100px;
    margin: 0 7px;
  }
`;

export const Input = styled.input`
  font-family: "Nanum Gothic", sans-serif;
  width: 180px;
  outline: none;
  border: 1px solid #01727c;
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px 8px;
`;

export const Button = styled.button`
  font-family: "Nanum Gothic", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px;
  margin-right: 5px;
  background-color: ${(props) => (props.bgWhite ? "#fff" : "#01a4b3")};
  border: 1px solid #01727c;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;

  svg {
    font-size: 1.1rem;
    color: #fff;
  }
  &:hover {
    background-color: ${(props) => (props.bgWhite ? "#e4fbfd" : "#008e9f")};
  }
`;
