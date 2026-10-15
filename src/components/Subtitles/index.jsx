import PropTypes from "prop-types";
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

Subtitle.propTypes = { children: PropTypes.node };

export default Subtitle;