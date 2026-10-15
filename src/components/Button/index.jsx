import { Buttons } from "./style";

const Button = ({ children = "Enviar", type = "button", disabled = false, ...props }) => (
  <Buttons type={type} disabled={disabled} {...props}>
    {children}
  </Buttons>
);

export default Button;
