import { Input, MenuButton } from '../../../components';
import {
  SearchContainer,
  SearchInput,
  StyledButton,
  SearchTerm,
  SearchIcon,
} from './styled';

let searchTerm = 'Lorem Ipsun';

const SearchEventoInputs = () => {
  return (
    <SearchContainer>
      <SearchInput>
        <Input
          startAdorment={<SearchIcon />}
          fullWidth
          onChange={console.log}
          placeholder="Pesquisar eventos"
        />
        <StyledButton variant="contained" color="secondary">
          Buscar
        </StyledButton>
      </SearchInput>

      <SearchTerm>
        Termo de busca:&nbsp;<span>{searchTerm}</span>
      </SearchTerm>
      <MenuButton
        label="Ordenar por"
        onChange={console.log}
        options={[
          { label: 'Menor preço', value: 0 },
          { label: 'Maior preço', value: 1 },
        ]}
      />
    </SearchContainer>
  );
};

export default SearchEventoInputs;
