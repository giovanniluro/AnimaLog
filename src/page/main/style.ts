import styled, { css } from 'styled-components';

interface FormProps {
  logged: boolean;
  isHidden: boolean;
}

export const Form = styled.form<FormProps>`

  background: #fff;
  padding: 46px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  position: relative;

  ${props => !props.logged && !props.isHidden && css`
    display: flex;
    animation: up 0.5s;
  `}

  ${props => props.logged && !props.isHidden && css`
    display: flex;
    animation: down 0.5s;
  `}

  button {
    background: #6708b5;
    color: #fff;
    font-size: 24px;
    font-family: 'Roboto Condensed', sans-serif;
    border: 0;
    width: 70%;
    margin-top: 32px;
    padding: 12px 24px;
  }

  @keyframes up {
    from {
      transform: translateY(100vh);
    } to {
      transform: translateY(0);
    }
  }

  @keyframes down {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(100vh);
    }
  }
`
export const Welcome = styled.div<FormProps>`
  background: #fff;
  height: 280px;
  width: 360px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position:relative;
  display: none;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right:15px;
    border: 1px solid rgba(0,0,0, 0.4);
  }

  p {
    font-size: 24px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 15px;
    background: transparent;
    border: 0;
    border-radius: 50%;
    outline: 0;
    transition: background 0.3s;

    &:hover {
      background: #ddd;
    }
  }

  ${props => props.logged && props.isHidden && css`
    display: flex;
    animation: up 0.5s;
  `}

  ${props => !props.logged && props.isHidden && css`
    display: flex;
    animation: down 0.5s forwards;
  `}

  @keyframes up {
    from {
      transform: translateY(100vh);
    } to {
      transform: translateY(0);
    }
  }

  @keyframes down {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(100vh);
    }
  }

`;
