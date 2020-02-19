import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1/3;

  margin-top: 130px;
  justify-self: center;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin: 28px 0px 20px;
  }

  p {
    margin: 7px 0 12px;
  }
`;

export const BackToForm = styled.span`
  color: #009966;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`;
