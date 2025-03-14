import { UserDTO } from '@src/shared/interfaces/auth.dto';
import { encriptUser, uuidv4 } from '@src/utils/hash';
import { getStorage, removeStorage, setStorage } from '@src/utils/storage';
import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
  user: UserDTO | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  createUser: (data: UserDTO) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const signIn = async (email: string, password: string) => {
    const keyUser = encriptUser(email, password);
    const response = await getStorage(keyUser);
    if (response) {
      setUser(response);
    }
  };

  const signOut = () => {
    if (user) {
      const keyUser = encriptUser(user?.email, user?.password);
      removeStorage(keyUser);
      setUser(null);
    }
  };

  const createUser = async (data: UserDTO) => {
    const keyUser = encriptUser(data.email, data.password);
    const userHash = uuidv4();
    const newUser = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: userHash,
    };
    await setStorage(keyUser, JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{user, signIn, signOut, createUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
