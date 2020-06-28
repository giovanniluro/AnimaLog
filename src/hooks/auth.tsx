import React, { createContext, useState, useContext } from 'react';

interface User {
  id: string;
  url: string;
  login: string;
  password: string;
}

interface AuthContextData {
  setUser(data: User): void;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) throw new Error('You must use an AuthProvider inside your program');
  return context;
}
