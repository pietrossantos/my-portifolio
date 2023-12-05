import styled from "styled-components";
import device from "../../devices";

export const SubtitleStyle = styled.h2`
  width: 245px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;

  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

export const Strong = styled.strong`
  font-size: 28px;
  font-weight: 700;
  color: #551458;

  @media ${device.mobileL} {
    font-size: 22px;
  }
`;
