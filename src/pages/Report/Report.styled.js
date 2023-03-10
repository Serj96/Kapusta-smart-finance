import styled from '@emotion/styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ReportArrowLeft = styled(RiArrowLeftSLine)`
  fill: #ff751d;
  cursor: pointer;
`;

export const ReportArrowRight = styled(RiArrowRightSLine)`
  fill: #ff751d;
  cursor: pointer;
`;

export const ReportExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0;
  margin-bottom: 20px;
`;

export const ReportExpenseButtonArrowLeft = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  &:disabled {
    background-color: transparent;
  }
`;

export const ReportExpenseButtonArrowRight = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  &:disabled {
    background-color: transparent;
  }
`;

export const ReportExpenseText = styled.p`
  color: #000000;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media (max-width: 767.98px) {
    margin: 0 20px 0 20px;
  }

  @media (min-width: 768px) {
    margin: 0 15px 0 15px;
  }
`;

export const ReportExpenseListWrapper = styled.div`
  @media (min-width: 768px) {
    padding: 20px 40px 20px 40px;
    margin-bottom: 32px;

    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }

  @media (min-width: 1280px) {
    padding: 20px 0 20px 0;
    width: 1034px;
  }
`;

export const ReportExpenseList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;

  margin: 0 auto 32px auto;
  padding-left: 0;

  background: #ffffff;

  @media (min-width: 768px) and (max-width: 1279.98px) {
    align-self: center;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 623px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ReportExpenseListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;

  background-size: 50px 50px;

  @media (max-width: 767.98px) {
    width: calc((100% - 22px) / 3);
  }

  @media (min-width: 768px) {
    width: calc((100% - 30px) / 5);
  }
`;

export const ReportExpenseListItemAmount = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  margin-right: 0;

  color: #52555f;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ReportExpenseListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;

  color: #52555f;
  text-align: center;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
