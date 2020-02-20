import styled from 'styled-components';
import 'circular-std';

export const Container = styled.div`
  margin-top: 100px;
  padding-bottom: 60px;
  justify-self: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 940px) {
    margin: 40px 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;

  hr {
    margin: 20px 0;
    opacity: 0.2;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 19px 15px 10px;
  margin-top: 10px;
  border: 1px solid #d7dae5;
  border-radius: 6px;

  input,
  textarea {
    resize: none;
    width: 100%;
    border: 0;
    font-size: 16px;
    color: #232323;
    margin: 9px 0 0;
    background: transparent;
    transition: border-color 0.2s;
    font-family: CircularStd, sans-serif;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      font-size: 16px;
      cursor: text;
      top: 20px;
    }

    &:focus {
      ~ label {
        position: absolute;
        top: 7px;
        display: block;
        transition: 0.2s;
        font-size: 14px;
        color: #868e9e;
      }
    }
  }

  label {
    position: absolute;
    top: 7px;
    display: block;
    transition: 0.2s;
    font-size: 14px;
    color: #868e9e;
  }
`;

export const OptionsWapper = styled.div`
  margin: 10px 0 15px;
`;

export const OptionsContents = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;

  label {
    padding: 10px 15px;
    border-radius: 30px;
    cursor: pointer;
    border: 1px solid #d7dae5;
  }

  input {
    margin-right: 10px;
    display: none;
  }

  input:checked ~ label {
    color: #fff;
    background: linear-gradient(90deg, #18d898 0%, #10cc8d 100%);
    padding: 10px 20px;
    border-radius: 30px;
    transition: all 0.3s;
    border: none;
  }

  @media (max-width: 426px) {
    label {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }
  }
`;

export const SelectWapper = styled.div`
  select {
    width: 100%;
    margin-top: 8px;
    background: #fff;
    border: 1px solid #d7dae5;
    font-family: CircularStd, sans-serif;
    font-size: 14px;
    height: 40px;

    option {
      padding: 30px;
      background-color: #fff;
    }
  }
`;

export const AcceptTerms = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;

  input {
    display: none;

    &:checked + label > div {
      border-color: #18d898;

      > div {
        transform: rotateY(180deg);
      }
    }
  }

  label {
    display: flex;
    align-items: center;

    > div {
      margin-right: 10px;
      -webkit-perspective: 20;
      perspective: 20;
      border: 2px solid #e8e8eb;
      background: #e8e8eb;
      border-radius: 4px;
      transform: translate3d(0, 0, 0);
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        border-color: #18d898;
      }
    }
  }
`;

export const Flip = styled.div`
  display: block;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  position: relative;
  width: 20px;
  height: 20px;
`;

export const FlipFront = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 2px;

  background: white;
  z-index: 1;
`;

export const FlipBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 2px;

  transform: rotateY(180deg);
  background: #18d898;
  text-align: center;
  color: white;
  line-height: 20px;
  box-shadow: 0 0 0 1px #18d898;
  svg {
    margin-top: 3px;
    fill: none;
    path {
      stroke: white;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
`;

export const ButtonSendMessage = styled.button`
  margin-top: 30px;
  border: 0;
  padding: 14px 35px;
  background: #009966;
  color: #fff;
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
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
    transform: scale(1.04);
  }
`;
