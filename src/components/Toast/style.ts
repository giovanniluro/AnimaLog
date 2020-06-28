import styled, { css } from 'styled-components';

interface ContainerProps {
  type: "sucess"|"failure";
  show: boolean;
}

export const Container = styled.div<ContainerProps>`

  width: 320px;
  padding: 6px;
  font-family: 'Roboto Condensed', sans-serif;
  display: none;
  flex-direction: column;
  border-radius: 20px;
  position: absolute;
  top: -76px;

  ${props => props.type === "failure" && css`
    background: #f79992;
  `}

  ${
    props => props.show && css`
    display:flex;
    animation: show 2s forwards;
    `
  }

  p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  span {
    margin-left: 10px;
    margin-top: 10px;
  }

  @keyframes show {
    from {
      transform: translateY(15px);
      opacity: 0;
    }
    30% {
      transform: translateY(0px);
      opacity: 1;
    }
    80% {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;
