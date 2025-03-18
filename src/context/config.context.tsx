import React, {createContext, useContext, useState} from 'react';

interface ConfigContextData {
  loading: boolean;
  handleLoading: (loading: boolean) => void;
  modal: boolean;
  handleModal: (modal: boolean) => void;
}

const ConfigContext = createContext<ConfigContextData>({} as ConfigContextData);

export const ConfigProvider = ({children}: {children: React.ReactNode}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const handleModal = (value: boolean) => {
    setModal(value);
  };

  return (
    <ConfigContext.Provider
      value={{loading, handleLoading, modal, handleModal}}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  return context;
};
