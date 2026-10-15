import PropTypes from "prop-types";
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

Text.propTypes = { children: PropTypes.node };

export default Text;