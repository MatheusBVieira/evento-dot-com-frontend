import Image from 'next/image';

import { ShoppingCartOutline } from '@styled-icons/evaicons-outline';
import { EventoDataDetail, EventoLocalDetail, Button } from '../../components';
import {
  Container,
  Content,
  EventoImage,
  EventoDetalhe,
  EventoName,
  EventoCompra,
  EventoDescricaoTitle,
  EventoDescricao,
} from './styled';
import useFetch from '../../hooks/useFetch';
import { toCurrency } from '../../utils/toCurrency';
import { useRouter } from 'next/router';

const EventoContainer = ({ id }) => {
  const { push } = useRouter();
  const { data = {} } = useFetch({
    method: 'get',
    path: `/evento/${id}`,
    skip: !id,
  });

  const { nome, dataEvento, descricao, endereco, preco } = data;

  const handleClickBuy = () => {
    push(`/compra/${id}`);
  };

  return (
    <Container>
      <Content>
        <EventoImage>
          <Image
            src="/evento.jpg"
            width="570"
            height="470"
            layout="responsive"
          />
        </EventoImage>
        <EventoDetalhe>
          <div>
            <EventoName>{nome}</EventoName>
            <EventoLocalDetail endereco={endereco} />
            <EventoDataDetail dataEvento={dataEvento} />
            <EventoDescricaoTitle>Descriçâo do evento</EventoDescricaoTitle>
            <EventoDescricao>{descricao}</EventoDescricao>
          </div>
          <EventoCompra>
            <p>{`Valor: ${toCurrency(preco || 0)}`}</p>
            <Button onClick={handleClickBuy} color="primary">
              <ShoppingCartOutline width={24} height={24} />
              Comprar
            </Button>
          </EventoCompra>
        </EventoDetalhe>
      </Content>
    </Container>
  );
};

export default EventoContainer;
