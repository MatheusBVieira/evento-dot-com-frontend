import { Header, Footer } from '../../components';

import { Container, Content } from './styled';
import SearchEvento from './SearchEvento';

const ListEventos = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SearchEvento />
      </Content>
      <Footer />
    </Container>
  );
};

export default ListEventos;
