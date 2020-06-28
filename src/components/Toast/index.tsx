import React from 'react';
import { Container } from './style';

interface ToastProps {
  title: string;
  description: string;
  type: "sucess"|"failure";
}

const Toast: React.FC<ToastProps> = ({description, title, type}) => {
  return (
    <Container type={type}>
      <p>{title}</p>
      {description && <span>{description}</span>}
    </Container>
  )
}

export default Toast;
