import React from "react";
import { Wrapper, Loader, LoadingTitle } from "../style/loading";

const LoadingComponent = () => {
  return (
    <Wrapper>
      <LoadingTitle>
        <em>Motov</em> HomeWork
        <span>Applicant: JeonMinJae</span>
      </LoadingTitle>
      <Loader></Loader>
      <p>
        지도 데이터를 불러오는 중입니다. <br />
        잠시만 기다려주시기 바랍니다.
      </p>
    </Wrapper>
  );
};

export default LoadingComponent;
