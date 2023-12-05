import React from "react";
import { SubtitleStyle, Strong } from "./style";

const Subtitle = ({ children, strong, newChildren }) => {
  return (
    <>
      <SubtitleStyle>
        {children}
        <Strong>{strong}</Strong>
        {newChildren}
      </SubtitleStyle>
    </>
  );
};

export default Subtitle;