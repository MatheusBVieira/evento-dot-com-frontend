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
`;

const EventoLocalDetail: React.FC<EventoLocalDetailProps> = ({ endereco }) => {
  const { cidade, bairro, estado, numero, rua, nomeLocal } = endereco ?? {};

  return (
    <EnderecoContainer>
      <CurrentLocation width={24} height={24} />
      <p>
        {`${nomeLocal} - ${rua}, ${numero}, ${bairro} - ${cidade} - ${estado}`}
      </p>
    </EnderecoContainer>
  );
};

export default EventoLocalDetail;
