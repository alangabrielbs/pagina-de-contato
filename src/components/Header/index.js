import React from 'react';
import { shape, func } from 'prop-types';

import emojiDNA from '../../assets/images/dna.png';
import iconLogin from '../../assets/images/log-in.svg';
import iconUser from '../../assets/images/user.svg';

import { Container, Welcome, IMG, Button } from './styles';

export default function Header({ user, handleLogin, handleLogout }) {
  const handleLoginOrLogout = () => {
    const handle = user ? handleLogout() : handleLogin();

    return handle;
  };

  return (
    <Container>
      {user && (
        <Welcome>
          <img src={iconUser} alt="Usuário" />
          <h3>
            Bem vindo, <span>{user.name}!</span>
          </h3>
        </Welcome>
      )}
      <IMG src={emojiDNA} alt="Sanar" />
      <Button login={!user} onClick={handleLoginOrLogout}>
        {user ? 'Sair' : 'Entrar'}
        {!user && <img src={iconLogin} alt="Entrar" />}
      </Button>
    </Container>
  );
}

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: shape(),
  handleLogin: func.isRequired,
  handleLogout: func.isRequired,
};
