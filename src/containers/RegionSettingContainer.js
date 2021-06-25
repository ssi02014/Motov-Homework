import React, { useState, useRef } from "react";
import MapTopFormComponent from "../components/MapTopFormComponent";
import ModalComponent from "../components/ModalComponent";

const RegionSettingContainer = ({ countryData, setCompleteRegion }) => {
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

  const onComplete = (e) => {
    e.preventDefault();
    setModal(false);
    setCompleteRegion([...selectRegions]);
  };

  return (
    <>
      <MapTopFormComponent onClick={onModal} />
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
          onComplete={onComplete}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default RegionSettingContainer;
