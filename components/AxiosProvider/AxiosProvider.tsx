import { memo, createContext, useContext } from 'react';
import axios, { AxiosInstance } from 'axios';

const AxiosContext = createContext<any>(null);

export const useAxios = () => useContext<AxiosInstance>(AxiosContext);

const AxiosProvider = memo(({ children }) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  return (
    <AxiosContext.Provider value={instance}>{children}</AxiosContext.Provider>
  );
});

export default AxiosProvider;
