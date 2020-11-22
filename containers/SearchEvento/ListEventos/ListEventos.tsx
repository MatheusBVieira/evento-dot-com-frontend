import { CardEvento } from '../../../components';
import { ListBanner, ListContainer } from './styled';

const ListEventos = () => {
  return (
    <ListBanner>
      <ListContainer>
        <CardEvento />
        <CardEvento />
        <CardEvento />
        <CardEvento />
        <CardEvento />
        <CardEvento />
        <CardEvento />
      </ListContainer>
    </ListBanner>
  );
};

export default ListEventos;
