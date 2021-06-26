import React, { useState, useRef, useEffect } from "react";
import MapTopFormComponent from "../components/MapTopFormComponent";
import ModalComponent from "../components/ModalComponent";

const RegionSettingContainer = ({ allRegionData, setCompleteRegion }) => {
  const [modal, setModal] = useState(false);
  const [selectOptionCity, setSelectOptionCity] = useState([]);
  const [selectOptionCountry, setSelectOptionCountry] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [selectRegions, setSelectRegions] = useState([]);
  const [formValue, setFormValue] = useState({
    city: "",
    country: "",
  });

  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);
  const checkBoxRef = useRef(null);

  useEffect(() => {
    const citySet = new Set();

    allRegionData.forEach((regionData) => {
      citySet.add(regionData.city);
    });
    setSelectOptionCity([...Array.from(citySet)]);
  }, []);

  // Modal ON/OFF
  const onModal = (e) => {
    e.preventDefault();
    setModal(true);
    setSelectOptionCountry([]);
    setSelectRegions([]);
    setSelectCity("");
  };

  // Input Functions
  const onInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onInputMouseDown = () => {
    onValidation();
  };

  const onInputComplete = (e) => {
    e.preventDefault();

    setCompleteRegion([...selectRegions]);

    // Input Value 초기화
    inputCityRef.current.value = "";
    inputCountryRef.current.value = "";
    setFormValue({
      city: "",
      country: "",
    });
  };

  // Input 유효성 검사
  const onValidation = () => {
    const { city, country } = formValue;

    const citySet = new Set();
    const countrySet = new Set();

    allRegionData.forEach((data) => {
      if (city === data.city) countrySet.add(data.country);
      citySet.add(data.city);
    });

    const cityList = Array.from(citySet);
    const countryList = Array.from(countrySet);

    if (!city.length || !country.length) {
      alert("빈 칸 없이 입력해주시기 바랍니다.");
    } else if (!cityList.includes(city)) {
      alert("City를 제대로 입력해주시기 바랍니다.");
    } else if (!countryList.includes(country)) {
      alert("Country를 제대로 입력해주시기 바랍니다.");
    } else {
      setSelectRegions([formValue]);
    }
  };

  // Modal Functions
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
    setSelectCity(e.target.value);
    setSelectOptionCountry([]);

    checkBoxRef.current.childNodes.forEach((el) => {
      el.childNodes[0].checked = false;
      setSelectRegions([]);
    });

    allRegionData.forEach((el) => {
      if (el.city === e.target.value) {
        setSelectOptionCountry((prev) => [...prev, el.country]);
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
          selectOptionCity={selectOptionCity}
          selectOptionCountry={selectOptionCountry}
          selectCity={selectCity}
          selectRegions={selectRegions}
          setModal={setModal}
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
