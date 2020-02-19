import React from 'react';
import { shape, func } from 'prop-types';

import {
  Container,
  Form,
  InputWrapper,
  OptionsWapper,
  Option,
  OptionsContents,
  SelectWapper,
  AcceptTerms,
  Flip,
  FlipFront,
  FlipBack,
  ButtonSendMessage,
} from './styles';

import { ReactComponent as Check } from '../../assets/images/check.svg';

export default function ContactForm({ data, onChange, onSubmit }) {
  const isSelected = option => {
    return data.option === option;
  };

  const options = [
    { id: 1, label: 'Tenho dúvidas sobre minha associação' },
    { id: 2, label: 'Tenho uma pergunta técnica' },
    { id: 3, label: 'Gostaria de mudar a associação' },
    { id: 4, label: 'Outra pergunta' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    if (data.terms) {
      onSubmit();
    }
  };

  const handleKeyPress = e => {
    if (e.target.name !== 'message' && e.charCode === 13) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Container>
      <h2>Preencha o formulário abaixo</h2>
      <Form onKeyPress={handleKeyPress} onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={data.name}
            onChange={e => onChange(e.target)}
          />
          <label htmlFor="name">Seu nome</label>
        </InputWrapper>
        <InputWrapper>
          <input
            required
            id="email"
            type="text"
            name="email"
            placeholder="Seu melhor email"
            value={data.email}
            onChange={e => onChange(e.target)}
          />
          <label htmlFor="email">Seu melhor email</label>
        </InputWrapper>
        <OptionsWapper>
          <p>Selecione sua opção de adesão:</p>
          <OptionsContents>
            <Option>
              <input
                id="A"
                type="radio"
                name="option"
                value="A"
                defaultChecked={isSelected('A')}
                onChange={e => onChange(e.target)}
              />
              <label htmlFor="A">Opção A</label>
            </Option>
            <Option>
              <input
                id="B"
                type="radio"
                name="option"
                value="B"
                defaultChecked={isSelected('B')}
                onChange={e => onChange(e.target)}
              />
              <label htmlFor="B">Opção B</label>
            </Option>
            <Option>
              <input
                id="C"
                type="radio"
                name="option"
                value="C"
                defaultChecked={isSelected('C')}
                onChange={e => onChange(e.target)}
              />
              <label htmlFor="C">Opção C</label>
            </Option>
          </OptionsContents>
        </OptionsWapper>
        <hr />
        <SelectWapper>
          <label htmlFor="select">Em que podemos ajudá-lo:</label>
          <select
            name="select"
            id="select"
            value={data.select}
            onChange={e => onChange(e.target)}
          >
            {options.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </SelectWapper>
        <InputWrapper>
          <textarea
            id="message"
            rows="5"
            name="message"
            placeholder="Digite sua pergunta aqui"
            value={data.message}
            onChange={e => onChange(e.target)}
          />
          <label htmlFor="message">Digite sua pergunta aqui</label>
        </InputWrapper>
        <AcceptTerms>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={data.terms}
            onChange={e => onChange(e.target)}
          />

          <label htmlFor="terms">
            <div>
              <Flip>
                <FlipFront />
                <FlipBack>
                  <Check />
                </FlipBack>
              </Flip>
            </div>
            Eu concordo com os termos e condições.
          </label>
        </AcceptTerms>
        <ButtonSendMessage>Enviar</ButtonSendMessage>
      </Form>
    </Container>
  );
}

ContactForm.propTypes = {
  data: shape().isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};
