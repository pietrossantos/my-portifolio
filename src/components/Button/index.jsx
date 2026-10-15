import PropTypes from "prop-types";
import { Buttons } from "./style";

const Button = ({ children = "Enviar", type = "button", disabled = false, ...props }) => (
  <Buttons type={type} disabled={disabled} {...props}>
    {children}
  </Buttons>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
