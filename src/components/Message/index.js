import React from 'react';
import { func } from 'prop-types';

import partyPopper from '../../assets/images/party-popper.png';

import { Container, BackToForm } from './styles';

export default function Message({ cleanForm }) {
  return (
    <Container>
      <img src={partyPopper} alt="Envelope" />
      <h2>Mensagem enviada!</h2>
      <p>
        Responderemos à sua mensagem nas próximas 24 horas. Tenha um bom dia!{' '}
        <span role="img" aria-label="Feliz">
          😊
        </span>
      </p>
      <BackToForm onClick={cleanForm}>Enviar uma nova menasgem</BackToForm>
    </Container>
  );
}

Message.propTypes = {
  cleanForm: func.isRequired,
};
