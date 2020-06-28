import React from 'react';
import { Container } from './style';

interface ToastProps {
  title: string;
  description?: string;
  type: "sucess"|"failure";
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({description, title, type, show}) => {

  return (
    <Container type={type} show={show}  >
      <p>{title}</p>
      {description && <span>{description}</span>}
    </Container>
  )
}

export default Toast;
