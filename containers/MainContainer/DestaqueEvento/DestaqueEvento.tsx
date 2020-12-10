import Image from 'next/image';
import { Loader } from '../../../components';
import useFetch from '../../../hooks/useFetch';

import {
  StyledContainer,
  DestaqueContainer,
  DestaqueImage,
  DestaqueTitle,
  DestaqueDescricao,
  DataEvento,
  NomeEvento,
  StyledDivider,
  StyledButton,
  DescricaoEvento,
} from './styled';

const MainContainer = () => {
  const { data, loading } = useFetch({
    method: 'get',
    path: '/compra/destaque',
  });

  console.log(data);

  return (
    <StyledContainer>
      <DestaqueTitle>Destaques</DestaqueTitle>
      {loading ? (
        <Loader fullScreen />
      ) : (
        <DestaqueContainer>
          <DestaqueImage>
            <Image
              src="/evento.jpg"
              width="570"
              height="470"
              layout="responsive"
            />
          </DestaqueImage>
          <DestaqueDescricao>
            <DataEvento>18 de dezembro</DataEvento>
            <NomeEvento>Nome do evento</NomeEvento>
            <p>local do evento</p>
            <StyledDivider />
            <DescricaoEvento>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </DescricaoEvento>
            <StyledButton variant="contained" color="primary">
              Ver detalhes
            </StyledButton>
          </DestaqueDescricao>
        </DestaqueContainer>
      )}
    </StyledContainer>
  );
};

export default MainContainer;
