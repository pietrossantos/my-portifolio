import React from "react";
import { SubtitleStyle} from "./style";

const Subtitle = ({ children }) => {
  return (
    <>
      <SubtitleStyle>
        {children}
      </SubtitleStyle>
    </>
  );
};

export default Subtitle;