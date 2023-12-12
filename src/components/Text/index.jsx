import React from "react";
import { TextStyle} from "./style";

const Text = ({ children }) => {
  return (
    <>
      <TextStyle>
        {children}
      </TextStyle>
    </>
  );
};

export default Text;