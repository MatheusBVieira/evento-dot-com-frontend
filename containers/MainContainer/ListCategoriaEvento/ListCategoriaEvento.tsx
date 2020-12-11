import { Container, CategoriaTitle, ListBanner, ListContainer } from './styled';
import { CardEvento, Carousel } from '../../../components';
import useFetch from '../../../hooks/useFetch';

const ListCategoriaEvento = () => {
  const { data: { content = [] } = {} } = useFetch({
    method: 'get',
    path: '/evento',
  });

  return (
    <Container>
      <CategoriaTitle>Eventos</CategoriaTitle>
      <ListBanner>
        <ListContainer>
          <Carousel>
            {content.map((card, index) => (
              <CardEvento key={index} {...card} />
            ))}
          </Carousel>
        </ListContainer>
      </ListBanner>
    </Container>
  );
};

export default ListCategoriaEvento;
