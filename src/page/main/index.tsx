import React, { useCallback, useState } from 'react';
import { Form, Welcome } from './style';
import Input from '../../components/Input';
import { FiPower } from 'react-icons/fi';
import api from '../../providers/api';
import Toast from '../../components/Toast';

interface User {
  login: string;
  password: string;
  id: string;
  url: string;
}

const Main: React.FC = () => {

  const [logged, setLogged] = useState(false);
  const [hide, setHide] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User>({} as User);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await api.get('/users');
    const users: User[] = response.data;
    const user = users.find(user => user.login === login);
    if (user) {
      if (password === user.password) {
        setLogin('');
        setPassword('');
        setUser(user);
        setLogged(true);
      }

      console.log('Password does not match.');
    }
    else {
      console.log('User not found');
    }

  }, [login, password]);

  const handleLogout = useCallback(() => {
    setLogged(false);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} logged={logged} onAnimationEnd={() => { if (logged) setHide(true) }} isHidden={hide} >
        <Input name="Login" type="text" value={login} onChange={e => setLogin(e.target.value)} />
        <Input name="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit"> Entrar </button>
      </Form>
      <Welcome logged={logged} isHidden={hide} onAnimationEnd={() => { if (!logged) setHide(false) }}>
        <button onClick={handleLogout}><FiPower size={30} /></button>
        <img src={user.url} alt={user.login} />
        <p> Bem-vindo, <strong>{user.login}!</strong></p>
      </Welcome>
    </>
  )

}

export default Main;
