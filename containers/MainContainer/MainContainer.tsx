import Image from 'next/image';
import { Header } from '../../components';
import { PageMain, Content, BackgoundImage } from './styled';

import DestaqueEvento from './DestaqueEvento';
import ListCategoriaEvento from './ListCategoriaEvento';

const MainContainer = () => {
  return (
    <PageMain>
      <Header />
      <Content>
        <BackgoundImage>
          <Image src="/background.svg" layout="fill" />
        </BackgoundImage>
        <DestaqueEvento />
        <ListCategoriaEvento />
        <ListCategoriaEvento />
        <ListCategoriaEvento />
      </Content>
    </PageMain>
  );
};

export default MainContainer;
