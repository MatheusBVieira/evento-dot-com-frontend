import { useRouter } from 'next/router';
import {
  memo,
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useToast } from '../Toast';
import { useAxios } from './AxiosProvider';

const AuthContext = createContext<any>(null);

type User = {
  email?: string;
  senha?: string;
};

type OnFinish = (isLoged: boolean) => void;

type AuthInstance = {
  logIn: (user: User, onFinish?: OnFinish) => void;
  logOut: () => void;
  validateToken: () => void;
  token: string;
};

export const useAuth = () => useContext<AuthInstance>(AuthContext);

const AuthProvider = memo(({ children }) => {
  const api = useAxios();
  const showToast = useToast();
  const { back, reload } = useRouter();
  const [validated, setValidated] = useState(false);

  const actualToken =
    typeof window !== 'undefined' && localStorage.getItem('token');

  const logIn = async (user: User, onFinish?: (isLoged: boolean) => void) => {
    const response = await api
      .post('/auth', user)
      .catch(() => showToast('Senha ou email incorreto', { type: 'error' }));

    const { data: { token = null } = {} } = response || {};

    onFinish && onFinish(!!token);

    if (token) {
      localStorage.setItem('token', token);
      back();
    } else {
      return false;
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    reload();
  };

  const timeoutRef = useRef<number>();
  const validateToken = useCallback(() => {
    clearTimeout(timeoutRef.current);

    if (actualToken && !validated) {
      api
        .get('/auth')
        .then(() => setValidated(true))
        .catch(() => logOut());
    } else {
      setValidated(true);
    }

    timeoutRef.current = setTimeout(() => {
      setValidated(false);
    }, 100000);
  }, [actualToken, validated]);

  return (
    <AuthContext.Provider
      value={{ logIn, logOut, validateToken, token: actualToken }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export default AuthProvider;
