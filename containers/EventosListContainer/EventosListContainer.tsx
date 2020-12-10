import { useState } from 'react';
import { Tabs } from '@material-ui/core';

import { Loader, Button } from '../../components';
import EventoCard from './EventoCard';
import {
  Container,
  TabsContainer,
  Tab,
  ListContainer,
  NoEventLabel,
} from './styled';
import useFetch from '../../hooks/useFetch';

const EventosListContainer = () => {
  const [tab, setTab] = useState(0);

  const {
    data: {
      content: criados = [],
      pageable: { pageNumberCriados = 0 } = {},
      last: lastCriados,
    } = {},
    loading: loadingCriados,
    fetchMore: fetchMoreCriados,
  } = useFetch({
    method: 'get',
    path: '/evento/criador',
  });

  const {
    data: {
      content: compras = [],
      pageable: { pageNumberCompras = 0 } = {},
      last: lastCompras,
    } = {},
    loading: loadingCompras,
    fetchMore: fetchMoreCompras,
  } = useFetch({
    method: 'get',
    path: '/compra',
  });

  const handleFetchMore = (page, fetchMore) => {
    fetchMore({ page: page + 1 }, (prev, data) => ({
      ...data,
      content: [...prev.content, ...data.content],
    }));
  };

  const renderCriados = () => (
    <>
      {criados.length > 0 ? (
        criados.map((evento, index) => (
          <EventoCard key={index} edit evento={evento} />
        ))
      ) : (
        <NoEventLabel>Você ainda não criou nenhum evento</NoEventLabel>
      )}
      {!lastCriados && (
        <Button
          onClick={() => handleFetchMore(pageNumberCriados, fetchMoreCriados)}
          color="primary"
        >
          Carregar mais
        </Button>
      )}
    </>
  );

  const renderCompras = () => (
    <>
      {compras.length > 0 ? (
        compras.map((compra, index) => (
          <EventoCard key={index} evento={compra.evento} />
        ))
      ) : (
        <NoEventLabel>Você ainda não comprou nenhum evento</NoEventLabel>
      )}
      {!lastCompras && (
        <Button
          onClick={() => handleFetchMore(pageNumberCompras, fetchMoreCompras)}
          color="primary"
        >
          Carregar mais
        </Button>
      )}
    </>
  );

  const renderedTab = [renderCompras(), renderCriados()];

  return (
    <Container>
      <TabsContainer>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, t) => setTab(t)}
        >
          <Tab label="Meus ingressos" />
          <Tab label="Eventos criados" />
        </Tabs>
      </TabsContainer>
      <ListContainer>
        {loadingCompras || loadingCriados ? <Loader /> : renderedTab[tab]}
      </ListContainer>
    </Container>
  );
};

export default EventosListContainer;
