import { ReactText, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Input, MenuButton } from '../../../components';
import {
  SearchContainer,
  SearchInput,
  StyledButton,
  SearchTerm,
  SearchIcon,
} from './styled';

type QueryParams = {
  term: ReactText;
  orderBy: ReactText;
};

const SearchEventoInputs = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<ReactText>();
  const [query, setQuery] = useState(router.query as QueryParams);
  const { term, orderBy } = query;

  const handleSearchTerm = () => {
    setQuery((prev) => ({ ...prev, term: searchTerm }));
  };

  const handleOrderBy = (value) => {
    setQuery((prev) => ({ ...prev, orderBy: value }));
  };

  useEffect(() => {
    if (query) {
      router.push({ query });
    }
  }, [query]);

  return (
    <SearchContainer>
      <SearchInput>
        <Input
          startAdorment={<SearchIcon />}
          fullWidth
          onChange={({ value }) => setSearchTerm(value)}
          placeholder="Pesquisar eventos"
        />
        <StyledButton
          onClick={handleSearchTerm}
          variant="contained"
          color="secondary"
        >
          Buscar
        </StyledButton>
      </SearchInput>

      <SearchTerm>
        Termo de busca:&nbsp;<span>{term}</span>
      </SearchTerm>
      <MenuButton
        label="Ordenar por"
        defaultValue={orderBy}
        onChange={handleOrderBy}
        options={[
          { label: 'Menor preço', value: 'MENOR_PRECO' },
          { label: 'Maior preço', value: 'MAIOR_PRECO' },
        ]}
      />
    </SearchContainer>
  );
};

export default SearchEventoInputs;
