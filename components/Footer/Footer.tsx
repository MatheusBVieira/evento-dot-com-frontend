import Image from 'next/image';

import { FooterContainer, FooterImage, TextContainer } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage>
        <Image src="/footer-background.svg" layout="fill" />
      </FooterImage>
      <TextContainer>© 2020 Evento.com Inc.</TextContainer>
    </FooterContainer>
  );
};

export default Footer;
