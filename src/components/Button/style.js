import styled from "styled-components";

export const Buttons = styled.button`
  position: relative;
  z-index: 1;
  display: block;
  width: min(100%, 350px);
  height: 78px;
  border: none;
  background-color: #38ecd7e7;
  opacity: 0.92;
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  border-radius: 8px;

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }

  &:hover {
    cursor: pointer;
    transform: rotate3d(1, 0, 0, 360deg);
    transition: 1.5s ease-in-out;
    color: #fffefeff;
    opacity: 1;
  }
`;