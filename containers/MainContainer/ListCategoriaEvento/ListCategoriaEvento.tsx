import { Container, CategoriaTitle, ListBanner, ListContainer } from './styled';
import { CardEvento, Carousel } from '../../../components';

const cards = [
  {
    name: 'Lorem Ipsum',
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    name: 'Where does it come from',
    descricao:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. .',
  },
  {
    name: 'What is Lorem Ipsum',
    descricao: 'words',
  },
  {
    name: 'Why do we use it',
    descricao:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const ListCategoriaEvento = () => {
  return (
    <Container>
      <CategoriaTitle>Categoria</CategoriaTitle>
      <ListBanner>
        <ListContainer>
          <Carousel>
            {cards.map((card, index) => (
              <CardEvento key={index} {...card} />
            ))}
          </Carousel>
        </ListContainer>
      </ListBanner>
    </Container>
  );
};

export default ListCategoriaEvento;
