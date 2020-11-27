import { memo, createContext, useContext, useMemo } from 'react';
import axios, { AxiosInstance } from 'axios';

const AxiosContext = createContext<any>(null);

export const useAxios = () => useContext<AxiosInstance>(AxiosContext);

type AxiosProviderProps = {
  url: string;
};

const AxiosProvider: React.FC<AxiosProviderProps> = memo(
  ({ children, url }) => {
    const token =
      typeof window !== 'undefined' && localStorage.getItem('token');

    const instance = axios.create({
      baseURL: url,
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return (
      <AxiosContext.Provider value={instance}>{children}</AxiosContext.Provider>
    );
  }
);

export default AxiosProvider;
