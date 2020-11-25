import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { CardEvento } from '../../../components';
import useFetch from '../../../hooks/useFetch';
import { ListBanner, ListContainer, LoadMore } from './styled';

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
      <ListContainer>
        {content.map((card, index) => (
          <CardEvento key={index} {...card} />
        ))}
      </ListContainer>
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
