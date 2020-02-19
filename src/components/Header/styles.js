import styled from 'styled-components';
import 'circular-std';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;

  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  h1 {
    grid-column: 3 / 4;
  }

  @media (max-width: 750px) {
    grid-template-columns: 2fr 50px 1fr;
  }

  @media (max-width: 615px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Welcome = styled.div`
  font-weight: normal;
  justify-self: start;

  display: flex;
  align-items: center;

  img {
    height: 25px;
    margin-right: 7px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;

    span {
      color: #009966;
      font-weight: 500;
    }
  }
`;

export const IMG = styled.img`
  height: 30px;

  grid-column: 2 / 3;
  justify-self: center;
  transition: all 0.3s;

  @media (max-width: 615px) {
    grid-column: 1 / 3;
    grid-row: 2/3;
    margin-top: 30px;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 14px 35px;
  background: ${({ login }) => (login ? '#009966' : 'none')};
  color: ${({ login }) => (login ? '#fff' : '#262A3F')};
  font-family: CircularStd, sans-serif;
  font-size: 15px;
  border-radius: 3px;
  justify-self: end;
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  img {
    height: 15px;
    margin-left: 7px;
  }

  &:hover {
    box-shadow: ${({ login }) =>
      login ? '0px 10px 30px rgba(0, 0, 0, 0.06)' : 'none'};
    transform: scale(1.04);
  }

  @media (max-width: 615px) {
    grid-column: 2 / 3;
  }
`;
