import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 87px 1fr;
  height: 100%;
`;

export const Content = styled.div`
  grid-row: 2 / 3;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 130px;
  width: 100%;
  max-width: 400px;

  text-align: center;

  p {
    span {
      color: #009966;
    }
  }

  @media (max-width: 940px) {
    justify-self: center;
    margin-top: 50px;
  }
`;
