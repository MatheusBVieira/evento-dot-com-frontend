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

type EnderecoContainerProps = {
  nowWrap?: boolean;
};

const EnderecoContainer = styled.div<EnderecoContainerProps>`
  margin: 2rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }

  ${({ nowWrap }) =>
    nowWrap &&
    `
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`}
`;

type EventoLocalDetailProps = EnderecoContainerProps & {
  endereco?: Endereco;
};

const EventoLocalDetail: React.FC<EventoLocalDetailProps> = ({
  endereco,
  nowWrap,
}) => {
  const { cidade, bairro, estado, numero, rua, nomeLocal } = endereco ?? {};
  const textEndereco = `${nomeLocal} - ${rua}, ${numero}, ${bairro} - ${cidade} - ${estado}`;
  return (
    <EnderecoContainer nowWrap={nowWrap}>
      <CurrentLocation width={24} height={24} />
      <p>{textEndereco}</p>
    </EnderecoContainer>
  );
};

export default EventoLocalDetail;
