import React, { useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import ModalComponent from "../components/ModalComponent";

const ModalContainer = ({ setModal, modal }) => {
  const [selectRegions, setSelectRegions] = useState([]);
  const checkBoxRef = useRef(null);

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
  return (
    <>
      {modal ? (
        <ModalComponent
          selectRegions={selectRegions}
          allCheckHandle={allCheckHandle}
          allUnCheckHandle={allUnCheckHandle}
          checkHandle={checkHandle}
          completeRegionSelect={completeRegionSelect}
          checkBoxRef={checkBoxRef}
        />
      ) : (
        <></>
      )}
      <MapComponent />
    </>
  );
};

export default ModalContainer;
