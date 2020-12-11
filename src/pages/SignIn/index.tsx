import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Log In</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button type="submit">Enter</button>

        <a href="forgot">Fogoten Password</a>
      </form>

      <a href="dfsf">
        <FiLogIn />
        Sing In
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
