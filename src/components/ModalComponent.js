import React from "react";
import { cityName } from "../data/data";
//icons
import { BsTrash } from "react-icons/bs";
//style
import {
  ModalFormWrapper,
  FormTitle,
  FormSubTitle,
  FormButton,
  SelectBoxWrapper,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBoxInput,
  SelectCountryWrapper,
} from "../style/modal";

const ModalComponent = ({
  checkBoxRef,
  country,
  selectCity,
  selectRegions,
  onAllCheck,
  onAllUnCheck,
  onCheckCountry,
  onComplete,
  onSelectCity,
  onSelectCountry,
}) => {
  return (
    <>
      <ModalFormWrapper>
        <FormTitle>지역 설정</FormTitle>
        <SelectBoxWrapper onChange={onSelectCity}>
          <option value=""> 선택</option>
          {cityName.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxWrapper>
        <SelectBoxWrapper onChange={onSelectCountry}>
          <option value="">구 선택</option>
          {country.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxWrapper>
        <FormButton onClick={onAllCheck}>전체 선택</FormButton>
        <FormButton onClick={onAllUnCheck}>선택 해제</FormButton>
        <FormSubTitle>{selectCity}</FormSubTitle>
        <CheckBoxWrapper ref={checkBoxRef} onChange={onCheckCountry}>
          {country.map((el, idx) => {
            return (
              <CheckBoxLabel>
                <CheckBoxInput
                  key={idx}
                  type="checkbox"
                  name="region"
                  value={el}
                  id="region"
                />
                {el}
              </CheckBoxLabel>
            );
          })}
        </CheckBoxWrapper>
        <FormSubTitle>선택 도시</FormSubTitle>
        <SelectCountryWrapper>
          {selectRegions.map((region, idx) => {
            return (
              <p key={idx}>
                {region.country}
                <BsTrash />
              </p>
            );
          })}
        </SelectCountryWrapper>
        <FormButton onClick={onComplete}>지역 설정 완료</FormButton>
      </ModalFormWrapper>
    </>
  );
};

export default ModalComponent;
