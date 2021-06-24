import React, { useState, useRef, useEffect } from "react";
import MapTopFormComponent from "../components/MapTopFormComponent";
import ModalComponent from "../components/ModalComponent";

const MapTopFormContainer = ({ countryData }) => {
  const [modal, setModal] = useState(false);
  const [selectRegions, setSelectRegions] = useState([]);
  const [country, setCountry] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const checkBoxRef = useRef(null);

  // useEffect(() => {
  //   countryData[0].maps.forEach((el) => {
  //     console.log(el);
  //   });
  // }, []);

  const onModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const allCheckHandle = (e) => {
    e.preventDefault();

    setSelectRegions([]);

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = true;
      setSelectRegions((prev) => [...prev, el.childNodes[0].value]);
    });
  };

  const allUnCheckHandle = (e) => {
    e.preventDefault();

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;
      setSelectRegions([]);
    });
  };

  const checkHandle = (e) => {
    if (e.target.checked) {
      setSelectRegions((prev) => [...prev, e.target.value]);
    } else {
      setSelectRegions(selectRegions.filter((el) => el !== e.target.value));
    }
  };

  const completeRegionSelect = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const selectRegionChange = (e) => {
    setCountry([]);
    setSelectCity(e.target.value);
    countryData[0].maps.forEach((el) => {
      if (el.city === e.target.value) {
        setCountry((prev) => [...prev, el.country]);
      }
    });
  };

  return (
    <>
      <MapTopFormComponent onClick={onModal} />
      <ModalComponent
        modal={modal}
        country={country}
        selectCity={selectCity}
        selectRegions={selectRegions}
        allCheckHandle={allCheckHandle}
        allUnCheckHandle={allUnCheckHandle}
        checkHandle={checkHandle}
        completeRegionSelect={completeRegionSelect}
        selectRegionChange={selectRegionChange}
        checkBoxRef={checkBoxRef}
      />
    </>
  );
};

export default MapTopFormContainer;
