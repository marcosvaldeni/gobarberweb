import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Sign In</h1>

        <Input name="email" icon={FiUser} placeholder="Name" />

        <Input name="email" icon={FiMail} type="email" placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Save</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Back to Login
      </a>
    </Content>
  </Container>
);

export default SignUp;
