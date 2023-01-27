import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const FormTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const FormSubTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  margin-top: 32px;
`;

export const ButtonLink = styled.a`
  display: block;
  width: 122px;
  height: 40px;
  left: 99px;
  top: 339px;

  background: #f6f7fb;
  border-radius: 26px;

  margin: 0 auto;
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;

export const LoginForm = styled.div`
  height: 496px;
  width: 280px;
  background-color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 20px ;

  label {
    margin-top: 16px;

    
    display: block;
    
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.04em;

    margin-bottom: 12px;

    
  }

  input {
    display: block;
    width: 100%;
    height: 52px;

    background: #f6f7fb;
    border-radius: 30px;
    border: none;

    

    

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.04em;
      padding-left: 19px;

      color: #a6abb9;
    }

    }
    @media (min-width:767px) and (max-width:1279.98px){
        width: 426px;
        height: 552px;
        padding: 0 60px;

        
 }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
