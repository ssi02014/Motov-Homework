import React from "react";
import { FormWrapper, Input, Button } from "../style/topForm";

const MapTopFormComponent = ({ onClick }) => {
  return (
    <>
      <FormWrapper>
        <Input type="text"></Input>
        <Button onClick={onClick}>지역 설정</Button>
      </FormWrapper>
    </>
  );
};

export default MapTopFormComponent;
