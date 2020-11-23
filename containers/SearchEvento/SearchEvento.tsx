import { Content } from './styled';
import SearchEventoInputs from './SearchEventoInputs';
import ListEventos from './ListEventos';

const SearchEvento = () => {
  return (
    <Content>
      <SearchEventoInputs />
      <ListEventos />
    </Content>
  );
};

export default SearchEvento;
