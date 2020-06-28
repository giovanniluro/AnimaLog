import styled, { css } from 'styled-components';

interface ContainerProps {
  type: "sucess"|"failure";
}

export const Container = styled.div<ContainerProps>`

  width: 320px;
  padding: 6px;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: absolute;
  top: -76px;
  animation: show 0.3s backwards;

  ${props => props.type === "failure" && css`
    background: #ef493e;
  `}

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
    } to {
      transform: translateY(0);
      opacity: 1;
    }
  }

`;
