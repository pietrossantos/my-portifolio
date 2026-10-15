import styled from "styled-components";

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 0 24px;
  background-color: #0a0d1c;

  video {
    object-fit: cover;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
    padding: 8px 12px 20px;

    video {
      width: 96px;
      height: 96px;
    }
  }
`;

export const NavPosition = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  list-style: none;
  width: 100%;
  max-width: 820px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px 20px;
  }
`;

export const NavTitles = styled.li`
  font-size: clamp(15px, 2vw, 24px);
  cursor: pointer;
  transition: 0.35s linear;
  color: transparent;
  -webkit-text-stroke: 1.4px #38ecd7e7;
  background-image: linear-gradient(
    to left,
    #38ecd7e7,
    #64eded,
    #000000,
    #01010101
  );
  background-size: 200%;
  background-clip: text;
  animation: move 30s linear infinite;

  @keyframes move {
    100% {
      background-position: 1000px 0;
    }
  }

  &:hover {
    color: #38ecd7e7;
    text-shadow: 0 0 10px rgba(53, 168, 154, 0.906),
      0 0 80px rgba(53, 168, 154, 0.906),
      0 0 320px rgba(53, 168, 154, 0.906);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    -webkit-text-stroke: 0.8px #38ecd7e7;
  }
`;
