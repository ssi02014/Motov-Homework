import React, { useState, useRef } from "react";
import MapTopFormComponent from "../components/MapTopFormComponent";
import ModalComponent from "../components/ModalComponent";

const MapTopFormContainer = ({ countryData, setCompletRegion }) => {
  const [modal, setModal] = useState(false);
  const [selectRegions, setSelectRegions] = useState([]);
  const [country, setCountry] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const checkBoxRef = useRef(null);

  const onModal = (e) => {
    e.preventDefault();
    setModal(true);
    setCountry([]);
    setSelectRegions([]);
    setSelectCity("");
  };

  const onAllCheck = (e) => {
    e.preventDefault();

    setSelectRegions([]);

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = true;
      setSelectRegions((prev) => [...prev, el.childNodes[0].value]);
    });
  };

  const onAllUnCheck = (e) => {
    e.preventDefault();

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;
      setSelectRegions([]);
    });
  };

  const onCheckCountry = (e) => {
    if (e.target.checked) {
      setSelectRegions((prev) => [...prev, e.target.value]);
    } else {
      setSelectRegions(selectRegions.filter((el) => el !== e.target.value));
    }
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
        el.childNodes[0].checked = true;
        setSelectRegions((prev) => [...prev, el.childNodes[0].value]);
      }
    });
  };

  const onComplete = (e) => {
    e.preventDefault();
    setModal(false);
    setCompletRegion([...selectRegions]);
  };

  return (
    <>
      <MapTopFormComponent onClick={onModal} />
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
        onComplete={onComplete}
      />
    </>
  );
};

export default MapTopFormContainer;
