import React from "react";
import { FormWrapper, Input, Button } from "../style/topForm";

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
          검색
        </Button>
        <Button onClick={onModal}>지역 설정</Button>
      </FormWrapper>
    </>
  );
};

export default MapTopFormComponent;
