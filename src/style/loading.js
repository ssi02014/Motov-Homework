import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 250px 0;

  p {
    font-family: "Nanum Gothic", sans-serif;
    margin: 0;
    text-align: center;
    font-weight: bold;
  }
`;

export const LoadingTitle = styled.h1`
  position: relative;
  display: inline-block;
  font-family: "Fredoka One", cursive;
  font-size: 3.5rem;
  margin: 0;

  em {
    color: #01a4b3;
    font-style: normal;
  }
  span {
    position: absolute;
    right: 0;
    top: -5px;
    font-family: "Nanum Gothic", sans-serif;
    font-size: 0.7rem;
    animation: text 1.5s;
  }

  @keyframes text {
    from {
      transform: translateY(-30px);
      opacity: 0.3;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Loader = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: dashed 5px #108894;
  margin: 50px 0;
  animation: spins 3s infinite linear;

  @keyframes spins {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
