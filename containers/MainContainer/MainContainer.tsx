import Image from 'next/image';
import { Content, BackgoundImage } from './styled';

import DestaqueEvento from './DestaqueEvento';
import ListCategoriaEvento from './ListCategoriaEvento';

const MainContainer = () => {
  return (
    <Content>
      <BackgoundImage>
        <Image src="/background.svg" layout="fill" />
      </BackgoundImage>
      <DestaqueEvento />
      <ListCategoriaEvento />
    </Content>
  );
};

export default MainContainer;
