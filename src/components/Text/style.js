import styled from "styled-components";
import device from "../../devices";
import Button from "./../Button/index";

export const TextStyle = styled.p`
  width: 450px;
  padding: 20px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #3a90a0;
  font-family: "Outfit", sans-serif;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;
