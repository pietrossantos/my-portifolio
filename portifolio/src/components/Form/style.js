import styled from "styled-components";

export const FormContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Span = styled.span`
  color: red;
  margin-top: 10px;
  padding-left: 10px;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 15px;
`;

export const FormDeddy = styled.form`
  position: relative;
  background-color: #0a0d1c;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 25px 17.5px;
  h2 {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 200%;
    background: linear-gradient(
      to left,
      #38ecd7e7,
      #64eded,
      #000000,
      #01010101
    );
    animation: animate 15s linear infinite;
  }
  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #0a0d1c;
    inset: 5px;
    border-radius: inherit;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  height: 41px;
  font-size: 20px;
  color: white;
  outline: none;
  font-family: "Outfit";
  font-weight: 400;
  border-bottom: 1px solid #38ecd7e7;

  &::placeholder {
    color: white;
    font-family: "Orbitron", serif;
    border-bottom: transparent;
  }
`;

export const Area = styled.textarea`
  display: block;
  resize: none;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 638px;
  height: 50px;
  font-size: 20px;
  color: white;
  outline: none;
  font-weight: 400;
  font-family: "Outfit", sans-serif;
  border-bottom: 1px solid #38ecd7e7;

  &::placeholder {
    color: white;
    font-family: "Orbitron", sans-serif;
  }
`;

export const SendButton = styled.button`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 78px;
  border: none;
  background-color: #38ecd7e7;
  opacity: 0.34;
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    transform: rotate3d(1, 0, 0, 360deg);
    transition: 1.5s ease-in-out;
    color: #fffefeff;
    opacity: 1;
  }
`;
