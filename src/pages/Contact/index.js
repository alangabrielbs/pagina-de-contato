import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Message from '../../components/Message';

import envelope from '../../assets/images/envelope.png';

import { Container, Content, ContactUs } from './styles';

export default function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    option: 'A',
    select: 1,
    terms: false,
    message: '',
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [send, setSend] = useState(false);

  const sendContact = () => {
    setSend(true);
  };

  const handleChange = target => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setContact({
      ...contact,
      [name]: newValue,
    });
  };

  const handleLogin = () => {
    setCurrentUser({
      name: 'Alan Gabriel',
      email: 'ola@alangabriel.dev',
    });
    setContact({
      ...contact,
      name: 'Alan Gabriel',
      email: 'ola@alangabriel.dev',
    });
  };

  const cleanForm = () => {
    setContact({
      name: '',
      email: '',
      option: 'A',
      select: 1,
      terms: false,
      message: '',
    });
    setSend(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setContact({
      ...contact,
      name: '',
      email: '',
    });
  };

  useEffect(() => {
    if (!send && currentUser) {
      handleLogin();
    }
  }, [send]);

  return (
    <Container>
      <Header
        user={currentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Content>
        {!send && (
          <ContactUs>
            <img src={envelope} alt="Envelope" />
            <h2>Entre em contato conosco</h2>
            <p>
              Estamos ansiosos com seu contato
              {contact.name && <span> {contact.name}</span>}, conta pra gente
              como podemos lhe ajudar
            </p>
          </ContactUs>
        )}
        {!send ? (
          <ContactForm
            data={contact}
            onChange={handleChange}
            onSubmit={sendContact}
          />
        ) : (
          <Message cleanForm={cleanForm} />
        )}
      </Content>
    </Container>
  );
}
