import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { CardEvento, Loader } from '../../../components';
import useFetch from '../../../hooks/useFetch';
import { ListBanner, ListContainer, LoadMore, NoEventLabel } from './styled';

const SORT_KEYS = {
  MENOR_PRECO: 'preco',
  MAIOR_PRECO: 'preco,desc',
};

const ListEventos = () => {
  const { query: { orderBy, term } = {} } = useRouter();
  const variables = useMemo(
    () => ({
      pageSize: 12,
      sort: orderBy ? SORT_KEYS[orderBy as string] : undefined,
    }),
    [orderBy]
  );

  const {
    fetchMore,
    loading,
    data: { content = [], pageable: { pageNumber = 0 } = {}, last } = {},
  } = useFetch({
    method: 'get',
    path: '/evento',
    variables,
  });

  const handleFetchMore = () => {
    fetchMore({ ...variables, page: pageNumber + 1 }, (prev, data) => ({
      ...data,
      content: [...prev.content, ...data.content],
    }));
  };

  return (
    <ListBanner>
      {loading ? (
        <Loader />
      ) : content.length < 0 ? (
        <ListContainer>
          {content.map((card, index) => (
            <CardEvento key={index} {...card} />
          ))}
        </ListContainer>
      ) : (
        <NoEventLabel>Nenhum evento encontrado</NoEventLabel>
      )}

      {!last && (
        <LoadMore
          onClick={handleFetchMore}
          variant="contained"
          color="secondary"
        >
          Ver mais eventos
        </LoadMore>
      )}
    </ListBanner>
  );
};

export default ListEventos;
