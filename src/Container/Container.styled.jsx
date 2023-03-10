import styled from '@emotion/styled';

export const Div = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 123px;
    padding-right: 123px;
    max-width: 1280px;
  }
`;
