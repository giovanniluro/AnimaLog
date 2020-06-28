import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  padding: 0;
  margin: 0;
}

body {
  background: #6708b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

button {
  cursor: pointer;
}
`
