import styled from 'styled-components';

export const InputBlock = styled.div`

  & + div {
    margin-top: 36px;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
  }

  input {
    min-width: 240px;
    min-height: 25px;
    font-size: 18px;
    padding: 8px 12px;
  }
`
