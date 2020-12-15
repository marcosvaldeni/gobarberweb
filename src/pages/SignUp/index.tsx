import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />

          <Input name="email" icon={FiMail} type="email" placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Save</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Back to Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
