import styled from "styled-components";

export const Buttons = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: min(100%, 350px);
  min-height: 54px;
  padding: 14px 24px;
  border: 1px solid #75ef99;
  border-radius: 11px;
  background: linear-gradient(120deg, #3fce69, #96f5aa);
  box-shadow: 0 8px 28px rgba(49, 195, 91, .17);
  color: #07170c;
  font-family: "Space Grotesk", "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .25s ease, filter .2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(49, 195, 91, .28);
    filter: brightness(1.05);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: .6; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid #c3ffce; outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;
