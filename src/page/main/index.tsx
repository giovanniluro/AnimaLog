import React, { useCallback, useState } from 'react';
import { Form, Welcome } from './style';
import Input from '../../components/Input';
import { FiPower } from 'react-icons/fi'

const Main: React.FC = () => {

  const [logged, setLogged] = useState(false);
  const [hide, setHide] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLogged(true);
  }, []);

  const handleLogout = useCallback(() => {
    setLogged(false);
  }, []);

  return (
    <>
    <Form onSubmit={handleSubmit} logged={logged} onAnimationEnd={ () => { if (logged) setHide(true) }} isHidden={hide} >
      <Input name="Login" type="text" />
      <Input name="Senha" type="password" />
      <button type="submit"> Entrar </button>
    </Form>
    <Welcome logged={logged} isHidden={hide} onAnimationEnd={ () => {if(!logged) setHide(false)}}>
      <button onClick={handleLogout}><FiPower size={30} /></button>
      <p> Bem-vindo, Jorel!</p>
    </Welcome>
    </>
  )

}

export default Main;
