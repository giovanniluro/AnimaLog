import styled from 'styled-components';

interface SquareProps {
  size: number;
  left: number;
  duration: number;
}

export const SquareBox = styled.div`

  width: 100%;

  ul {
    list-style: none;
  }

`;

export const Square = styled.li<SquareProps>`

  position: absolute;
  bottom: 0;
  left: ${props => props.left}%;
  background: rgba(1,1,1, 0.2);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  z-index: -2000;
  animation: matrix ${props => props.duration }s infinite alternate;

  @keyframes matrix {
    from {
      transform: translateY(0) rotate(0deg);
    } to {
      transform: translateY(-100vh) rotate(1560deg);
    }
  }

`;
