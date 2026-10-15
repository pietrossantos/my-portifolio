import styled from "styled-components";

export const FormContainer = styled.section`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 680px;
  margin: 24px 0;

  > div {
    min-width: 0;
  }

  > div:last-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    > div:last-child {
      grid-column: auto;
    }
  }
`;

export const Span = styled.span`
  display: block;
  color: #ff8585;
  margin-top: 8px;
  padding-left: 10px;
  font-family: "Outfit", sans-serif;
  font-size: 14px;
`;

export const FormDeddy = styled.form`
  position: relative;
  background-color: #0a0d1c;
  width: min(100%, 780px);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 36px 24px;

  > * {
    position: relative;
    z-index: 1;
  }

  h2 {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 200%;
    background: linear-gradient(to left, #000000, #38ecd7e7, #64eded, #01010101, transparent);
    animation: animate 15s linear infinite;
  }

  @keyframes animate {
    100% { transform: rotate(360deg); }
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #0a0d1c;
    inset: 5px;
    border-radius: inherit;
  }

  @media (max-width: 680px) {
    min-height: auto;
    padding: 32px 16px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  min-height: 44px;
  font-size: 16px;
  color: white;
  outline: none;
  font-family: "Outfit", sans-serif;
  border-bottom: 1px solid #38ecd7e7;

  &::placeholder {
    color: white;
    font-family: "Orbitron", serif;
  }

  &:focus-visible {
    outline: 2px solid #38ecd7;
    outline-offset: 2px;
  }
`;

export const Area = styled.textarea`
  display: block;
  resize: vertical;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  min-height: 110px;
  font-size: 16px;
  color: white;
  outline: none;
  font-family: "Outfit", sans-serif;
  border-bottom: 1px solid #38ecd7e7;

  &::placeholder {
    color: white;
    font-family: "Orbitron", sans-serif;
  }

  &:focus-visible {
    outline: 2px solid #38ecd7;
    outline-offset: 2px;
  }
`;
