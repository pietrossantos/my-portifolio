import styled from "styled-components";
import device from "../../devices";

export const SubtitleStyle = styled.h2`
  padding: 40px 0 ;
  font-size: 28px;
  font-weight: 500;
  color: #38ecd7e7;
  font-family: 'Orbitron', sans-serif;
  text-align: center;


  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

