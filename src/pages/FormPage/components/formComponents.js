import styled from 'styled-components';
import bg from '../../../assets/coding.png';

export const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #009d86;
`;

export const FormSection = styled.div`
  background: #ffffff;
  width: 40%;
  border-radius: 0 50px 50px 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 160%;
    margin: 30px 0 0 30px;
  }
`;

export const FormInput = styled.div`
  margin-top: 60px;
  width: 300px;
  align-self: center;

  h2 {
    font-size: 240%;
    margin-bottom: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const LinkSwitch = styled.p`
  text-align: center;
  font-size: 80%;
  margin-top: 15px;

  span {
    color: #009d86;
  }
`;

export const InfoSection = styled.div`
  background: #009d86;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 70px;
`;

export const ImageDisplay = styled.div`
  width: 350px;
  height: 335px;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
`;

export const InfoDisplay = styled.h2`
  font-size: 120%;
  color: #ffffff;
`;
