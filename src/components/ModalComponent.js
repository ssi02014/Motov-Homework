import React from "react";
import { cityName } from "../data/data";
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
  selectOptionCountry,
  selectCity,
  selectRegions,
  setModal,
  onAllCheck,
  onAllUnCheck,
  onCheckCountry,
  onRemove,
  onComplete,
  onSelectCity,
  onSelectCountry,
}) => {
  return (
    <>
      <ModalFormWrapper>
        <FormTitle>지역 설정</FormTitle>
        <SelectBoxWrapper onChange={onSelectCity}>
          <option value="">시 선택</option>
          {cityName.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxWrapper>
        <SelectBoxWrapper onChange={onSelectCountry}>
          <option value="">구 선택</option>
          {selectOptionCountry.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </SelectBoxWrapper>
        <FormButton onClick={onAllCheck}>전체 선택</FormButton>
        <FormButton onClick={onAllUnCheck} bgWhite>
          선택 해제
        </FormButton>
        <FormSubTitle>{selectCity}</FormSubTitle>
        <CheckBoxWrapper ref={checkBoxRef} onChange={onCheckCountry}>
          {selectOptionCountry.map((el, idx) => {
            return (
              <CheckBoxLabel key={idx}>
                <CheckBoxInput
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
        {selectRegions.length ? (
          <>
            <FormSubTitle>선택 도시</FormSubTitle>
            <SelectCountryWrapper>
              {selectRegions.map((region, idx) => {
                return (
                  <p key={idx}>
                    {region.country}
                    <button onClick={onRemove} />
                  </p>
                );
              })}
            </SelectCountryWrapper>
            <FormButton onClick={onComplete} bgWhite>
              지역 설정 완료
            </FormButton>
          </>
        ) : (
          <></>
        )}
        <FormButton onClick={() => setModal(false)} bgWhite>
          취소
        </FormButton>
      </ModalFormWrapper>
    </>
  );
};

export default ModalComponent;
