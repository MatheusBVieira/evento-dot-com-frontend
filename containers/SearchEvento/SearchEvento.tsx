import styled from 'styled-components';

import SearchEventoInputs from './SearchEventoInputs';
import ListEventos from './ListEventos';

const Content = styled.main`
  width: 100%;
  min-height: calc(100vh - 160px);
`;

const SearchEvento = () => {
  return (
    <Content>
      <SearchEventoInputs />
      <ListEventos />
    </Content>
  );
};

export default SearchEvento;
