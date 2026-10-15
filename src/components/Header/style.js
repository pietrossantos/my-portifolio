import styled from "styled-components";

export const NavHeader = styled.header`
  width: 100%;
  min-height: 88px;
  padding: 18px max(20px, calc((100% - 1160px) / 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid rgba(81, 194, 178, .15);
  background: rgba(6, 16, 30, .94);
  .brand { display: flex; align-items: center; gap: 12px; color: #eaf8ff; text-decoration: none; white-space: nowrap; }
  .brand-mark { font-size: 26px; font-weight: 800; letter-spacing: -.08em; color: #e8f9ff; }
  .brand-mark span { color: #54e7af; }
  .brand-name { font-size: 12px; letter-spacing: .16em; font-weight: 700; }
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px 12px;
  }
`;
export const NavPosition = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(10px, 2.5vw, 30px);
  a { color: #a8bfce; text-decoration: none; display: block; padding: 9px 3px; border-bottom: 2px solid transparent; }
  a:hover, a.active { color: #6df2be; border-bottom-color: #57d9b0; }
  a:focus-visible { outline: 2px solid #57d9b0; outline-offset: 3px; }
`;
export const NavTitles = styled.span`
  font-size: clamp(12px, 1.2vw, 15px);
  font-weight: 600;
`;
