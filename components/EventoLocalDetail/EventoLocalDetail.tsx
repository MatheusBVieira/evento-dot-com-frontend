import { CurrentLocation } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';

type Endereco = {
  cep: string;
  nomeLocal: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type EventoLocalDetailProps = {
  endereco?: Endereco;
};

const EnderecoContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const EventoLocalDetail: React.FC<EventoLocalDetailProps> = ({ endereco }) => {
  const { cidade, bairro, estado, numero, rua, nomeLocal } = endereco ?? {};
  const textEndereco = `${nomeLocal} - ${rua}, ${numero}, ${bairro} - ${cidade} - ${estado}`;
  return (
    <EnderecoContainer>
      <CurrentLocation width={34} height={34} />
      <p>{textEndereco}</p>
    </EnderecoContainer>
  );
};

export default EventoLocalDetail;
