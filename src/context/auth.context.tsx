import {UserDTO} from '@src/shared/interfaces/auth.dto';
import {encriptUser} from '@src/utils/hash';
import {getStorage} from '@src/utils/storage';
import React, {createContext, useContext, useState} from 'react';

interface AuthContextData {
  user: UserDTO | null;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const signIn = async (email: string, password: string) => {
    const keyUser = encriptUser(email, password);
    const response = await getStorage(keyUser);
    console.log('🚀 ~ signIn ~ response:', response);
    if (response) {
      setUser(response);
    }
  };

  return (
    <AuthContext.Provider value={{user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
