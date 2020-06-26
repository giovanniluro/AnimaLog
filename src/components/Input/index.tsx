import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  return (
    <InputBlock>
      <p>{name}</p>
      <input {...rest}/>
    </InputBlock>
  )
}

export default Input;
