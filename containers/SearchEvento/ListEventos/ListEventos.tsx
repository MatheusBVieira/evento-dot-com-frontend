import { useRouter } from 'next/router';
import { CardEvento } from '../../../components';
import useFetch from '../../../hooks/useFetch';
import { ListBanner, ListContainer, LoadMore } from './styled';

const ListEventos = () => {
  const { query } = useRouter();
  const variables = {
    pageSize: 12,
  };

  const {
    fetchMore,
    data: { content = [], pageable: { pageNumber = 0 } = {}, last } = {},
  } = useFetch({
    method: 'get',
    path: '/evento',
    variables,
  });

  const handleFetchMore = () => {
    fetchMore({ ...variables, pageNumber: pageNumber + 1 }, (prev, data) => ({
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
