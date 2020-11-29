const baseRoutes = [
  {
    name: 'Buscar eventos',
    route: '/eventos',
  },
  {
    name: 'Organize seu evento',
    route: '/criar-evento',
  },
];

const authRoutes = [
  {
    name: 'Meus eventos',
    route: '/meus-eventos',
  },
  {
    name: 'Minha conta',
    route: '/conta',
  },
];

const noAuthRoutes = [
  {
    name: 'Acesse sua conta',
    route: '/conta',
  },
  {
    name: 'Cadastre-se',
    route: '/criar-conta',
    buttonProps: { border: true },
  },
];

type GetRoutesInstance = (
  auth: boolean
) => Array<{
  name: string;
  route: string;
  buttonProps?: object;
}>;

export const getRoutes: GetRoutesInstance = (auth) =>
  auth ? [...baseRoutes, ...authRoutes] : [...baseRoutes, ...noAuthRoutes];
