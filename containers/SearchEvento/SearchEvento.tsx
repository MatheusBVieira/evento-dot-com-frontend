import { Header, Footer } from '../../components';

import { Container, Content } from './styled';
import SearchEventoInputs from './SearchEventoInputs';
import ListEventos from './ListEventos';

const SearchEvento = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SearchEventoInputs />
        <ListEventos />
      </Content>
      <Footer />
    </Container>
  );
};

export default SearchEvento;
