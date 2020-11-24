import { memo, createContext, useContext } from 'react';

const AuthContext = createContext<any>(null);

type AuthInstance = {
  setAuth: (token: string) => void;
  token: string;
};

export const useAuth = () => useContext<AuthInstance>(AuthContext);

const AxiosProvider = memo(({ children }) => {
  const setAuthToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const token = typeof window !== 'undefined' && localStorage.getItem('token');

  return (
    <AuthContext.Provider value={{ setAuth: setAuthToken, token }}>
      {children}
    </AuthContext.Provider>
  );
});

export default AxiosProvider;
