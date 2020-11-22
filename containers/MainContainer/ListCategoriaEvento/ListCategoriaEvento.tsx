import { Container, CategoriaTitle, ListBanner, ListContainer } from './styled';
import { CardEvento, Carousel } from '../../../components';

const ListCategoriaEvento = () => {
  return (
    <Container>
      <CategoriaTitle>Categoria</CategoriaTitle>
      <ListBanner>
        <ListContainer>
          <Carousel>
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
          </Carousel>
        </ListContainer>
      </ListBanner>
    </Container>
  );
};

export default ListCategoriaEvento;
