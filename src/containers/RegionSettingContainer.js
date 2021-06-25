import React, { useState, useRef } from "react";
import MapTopFormComponent from "../components/MapTopFormComponent";
import ModalComponent from "../components/ModalComponent";

const RegionSettingContainer = ({ countryData, setCompleteRegion }) => {
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [selectRegions, setSelectRegions] = useState([]);
  const [formValue, setFormValue] = useState({
    city: "",
    country: "",
  });

  const checkBoxRef = useRef(null);
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);

  const onModal = (e) => {
    e.preventDefault();
    setModal(true);
    setCountry([]);
    setSelectRegions([]);
    setSelectCity("");
  };

  //input
  const onInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onInputMouseDown = () => {
    setSelectRegions([formValue]);
  };

  const onInputComplete = (e) => {
    e.preventDefault();

    setCompleteRegion([...selectRegions]);

    //input Value 초기화
    setFormValue({
      city: "",
      country: "",
    });
    inputCityRef.current.value = "";
    inputCountryRef.current.value = "";
  };

  //modal
  const onAllCheck = (e) => {
    e.preventDefault();

    setSelectRegions([]);

    checkBoxRef.current.childNodes.forEach((el) => {
      const data = {
        city: selectCity,
        country: el.childNodes[0].value,
      };
      el.childNodes[0].checked = true;
      setSelectRegions((prev) => [...prev, data]);
    });
  };

  const onAllUnCheck = (e) => {
    e.preventDefault();

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;
      setSelectRegions([]);
    });
  };

  const onSelectCity = (e) => {
    setCountry([]);
    setSelectCity(e.target.value);

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;
      setSelectRegions([]);
    });

    countryData[0].maps.forEach((el) => {
      if (el.city === e.target.value) {
        setCountry((prev) => [...prev, el.country]);
      }
    });
  };

  const onSelectCountry = (e) => {
    checkBoxRef.current.childNodes.forEach((el) => {
      if (e.target.value === el.childNodes[0].value) {
        const data = {
          city: selectCity,
          country: el.childNodes[0].value,
        };

        el.childNodes[0].checked = true;
        setSelectRegions((prev) => [...prev, data]);
      }
    });
  };

  const onCheckCountry = (e) => {
    if (e.target.checked) {
      const data = {
        city: selectCity,
        country: e.target.value,
      };
      setSelectRegions((prev) => [...prev, data]);
    } else {
      setSelectRegions(
        selectRegions.filter((el) => el.country !== e.target.value)
      );
    }
  };

  const onRemove = (e) => {
    e.preventDefault();

    const innerText = e.target.parentNode.innerText;

    checkBoxRef.current.childNodes.forEach((el) => {
      if (innerText === el.childNodes[0].value) {
        el.childNodes[0].checked = false;
      }
    });
    setSelectRegions(selectRegions.filter((el) => el.country !== innerText));
  };

  const onComplete = (e) => {
    e.preventDefault();
    setModal(false);
    console.log(selectRegions);
    setCompleteRegion([...selectRegions]);
  };

  return (
    <>
      <MapTopFormComponent
        onModal={onModal}
        onInputChange={onInputChange}
        onInputComplete={onInputComplete}
        onInputMouseDown={onInputMouseDown}
        inputCityRef={inputCityRef}
        inputCountryRef={inputCountryRef}
      />
      {modal ? (
        <ModalComponent
          checkBoxRef={checkBoxRef}
          modal={modal}
          country={country}
          selectCity={selectCity}
          selectRegions={selectRegions}
          onAllCheck={onAllCheck}
          onAllUnCheck={onAllUnCheck}
          onCheckCountry={onCheckCountry}
          onSelectCity={onSelectCity}
          onSelectCountry={onSelectCountry}
          onRemove={onRemove}
          onComplete={onComplete}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default RegionSettingContainer;
