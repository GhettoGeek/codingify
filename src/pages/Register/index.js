import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import bg from '../../assets/coding.png';

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #009d86;
`;

const FormSection = styled.div`
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

const FormInput = styled.div`
  margin-top: 60px;
  width: 300px;
  align-self: center;

  h2 {
    font-size: 240%;
    margin-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const LinkSwitch = styled.p`
  text-align: center;
  font-size: 80%;
  margin-top: 15px;

  span {
    color: #009d86;
  }
`;

const InfoSection = styled.div`
  background: #009d86;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 70px;
`;

const ImageDisplay = styled.div`
  width: 350px;
  height: 335px;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
`;

const InfoDisplay = styled.h2`
  font-size: 120%;
  color: #ffffff;
`;

const Register = () => {
  return (
    <MainWrapper>
      <FormSection>
        <h1>Codingify</h1>
        <FormInput>
          <h2>Sign Up</h2>
          <Input name="Username" placeholder="Choose username" focus="true" />
          <Input name="E-mail address" placeholder="you@example.com" />
          <Input name="Password" placeholder="Enter your password" />
          <ButtonWrapper>
            <Button>Sign Up</Button>
          </ButtonWrapper>
          <LinkSwitch>
            Already have an account? <span>Log in</span>
          </LinkSwitch>
        </FormInput>
      </FormSection>
      <InfoSection>
        <ImageDisplay></ImageDisplay>
        <InfoDisplay>
          Belajar pemrograman dengan konsep berpikir komputasional yang
          interaktif.
        </InfoDisplay>
      </InfoSection>
    </MainWrapper>
  );
};

export default Register;
