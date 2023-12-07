import React from "react";
import { SubtitleStyle} from "./style";

const Subtitle = ({ children, newChildren }) => {
  return (
    <>
      <SubtitleStyle>
        {children}
        {newChildren}
      </SubtitleStyle>
    </>
  );
};

export default Subtitle;