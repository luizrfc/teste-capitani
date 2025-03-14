import React, {createContext, useContext, useState} from 'react';
import {navigateTo} from '@src/hooks/useLinks';
import {UserDTO} from '@src/shared/interfaces/auth.dto';
import {encriptUser, uuidv4} from '@src/utils/hash';
import {getStorage, removeStorage, setStorage} from '@src/utils/storage';

interface AuthContextData {
  user: UserDTO | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  createUser: (data: UserDTO) => Promise<UserDTO | null>;
  loadUser: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    const keyUser = encriptUser(email, password);
    const _users = await getStorage('users');
    if (_users) {
      const _user = JSON.parse(_users).find((u: UserDTO) => u.code === keyUser);
      if (_user) {
        setUser(_user);
        await setStorage('keyUser', keyUser);
        return true;
      }
    }
    return false;
  };

  const signOut = async () => {
    if (user) {
      await removeStorage('keyUser');
      navigateTo('Auth');
      setUser(null);
    }
  };

  const createUser = async (data: UserDTO): Promise<UserDTO | null> => {
    try {
      const keyUser = encriptUser(data.email, data.password);
      const userHash = uuidv4();
      const newUser = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: userHash,
        code: keyUser,
      };
      const listUsers = await getStorage('users');
      setUser(newUser);
      if (listUsers) {
        const _users = JSON.parse(listUsers);
        _users.push(newUser);
        await setStorage('users', JSON.stringify(_users));
      } else {
        await setStorage('users', JSON.stringify([newUser]));
      }
      await setStorage('keyUser', keyUser);
      return newUser;
    } catch (error) {
      console.log('🚀 ~ error:', error);
      return null;
    }
  };

  const loadUser = async (): Promise<boolean> => {
    const users = await getStorage('users');
    const keyUser = await getStorage('keyUser');
    if (users && keyUser) {
      const _users = JSON.parse(users);
      const _user = _users.find((u: UserDTO) => u.code === keyUser);
      if (_user) {
        setUser(_user);
        return true;
      }
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{user, signIn, signOut, createUser, loadUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
