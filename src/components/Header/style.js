import styled from "styled-components";

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #0a0d1c;
`;

export const NavPosition = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  width: 820px;
`;
export const NavTitles = styled.li`
  font-size: 24px;
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
`;
