import React, { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  EventoDataDetail,
  EventoLocalDetail,
  Loader,
} from '../../../components';
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

const DestaqueEvento = () => {
  const { push } = useRouter();

  const { data: { content = [] } = {}, loading } = useFetch({
    method: 'get',
    path: '/evento',
  });

  const { id, nome, dataEvento, endereco, descricao } = content[0] ?? {};

  const handleClickCard = () => {
    id && push(`/evento/${id}`);
  };

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
            <DataEvento>
              <EventoDataDetail
                disableSpacing
                disableIcon
                dataEvento={dataEvento}
              />
            </DataEvento>
            <NomeEvento>{nome}</NomeEvento>
            <EventoLocalDetail disableSpacing disableIcon endereco={endereco} />
            <StyledDivider />
            <DescricaoEvento>{descricao}</DescricaoEvento>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleClickCard}
            >
              Ver detalhes
            </StyledButton>
          </DestaqueDescricao>
        </DestaqueContainer>
      )}
    </StyledContainer>
  );
};

export default memo(DestaqueEvento);
