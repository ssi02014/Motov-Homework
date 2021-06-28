import React from "react";
//style
import { FormWrapper, Input, Button } from "../style/topForm";
//icon
import { BiSearch } from "react-icons/bi";
//logo
import logo from "../image/logo.png";

const MapTopFormComponent = ({
  inputCityRef,
  inputCountryRef,
  onModal,
  onInputChange,
  onInputComplete,
  onInputMouseDown,
}) => {
  return (
    <>
      <FormWrapper>
        <img src={logo} alt="logo" />
        <Input
          type="text"
          name="city"
          placeholder="Ex) 서울특별시"
          onChange={onInputChange}
          ref={inputCityRef}
        />
        <Input
          type="text"
          name="country"
          placeholder="Ex) 성북구"
          onChange={onInputChange}
          ref={inputCountryRef}
        />
        <Button onClick={onInputComplete} onMouseDown={onInputMouseDown}>
          <BiSearch />
        </Button>
        <Button onClick={onModal} bgWhite>
          지역 설정
        </Button>
      </FormWrapper>
    </>
  );
};

export default MapTopFormComponent;
