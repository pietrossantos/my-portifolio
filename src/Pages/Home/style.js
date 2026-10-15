import styled from "styled-components";

export const PositionMain = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  padding: 24px 20px 50px;

  > div {
    flex: 1;
    min-width: 0;
  }

  > img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 24px 16px 40px;
    gap: 20px;

    > img {
      width: min(300px, 85vw) !important;
    }
  }
`;

export const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
`;
