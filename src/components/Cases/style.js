import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";

export const BoxCases = styled.div`
  background-color: #0a0d1c;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  margin: 20px 0;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200%;
    background: linear-gradient(
      to left,
      #0a0d1c,
      #3a90a0,
      #38ecd7e7,
      #38bcd7e7,
      transparent
    );
    animation: animate 15s linear infinite;
  }
  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #0a0d1c;
    inset: 3px;
    border-radius: inherit;
  }
`;
export const CostumizeCases = styled.img`
  width: 450px;
  height: 275px;
  cursor: pointer;
`;

export const SectionCase = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  border-radius: 50%;
  padding: 22px;
`;
export const DescriptionCase = styled.div`
  position: relative;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
`;

export const LinkExternal = styled(BiLinkExternal)`
  font-size: 28px;
  color: #ffffff8f;
  opacity: 0.5;

  &:hover {
    color: #03fee1e7;
    opacity: 1;
    transform: rotate3d(0, 1, 0, 360deg) scale(1.15);
    transition: 3s;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  img {
    font-size: 35px;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: rotate3d(0, 1, 0, 360deg) scale(1.15);
      transition: 3s;
    }
  }
`;
