import ElasticCarousel from 'react-elastic-carousel';
import { createGlobalStyle } from 'styled-components';

const CarouselStyles = createGlobalStyle`
  .rec.rec-arrow {
    color: ${({ theme }) => theme.colors.ligthText};
    background-color: transparent;
    border: 1px solid  ${({ theme }) => theme.colors.complementText};

    @media (max-width: 725px){
      display: none;
    }
  }
  
  .rec.rec-arrow:hover, .rec.rec-arrow:focus {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-dot {
    border: 1px solid  ${({ theme }) => theme.colors.complementText};
    box-shadow: none;
  }

  .rec-dot_active {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }

  .rec.rec-dot:hover, .rec.rec-dot:focus {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border: none;
  }
`;

const Carousel = ({ children }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 725, itemsToShow: 2 },
    { width: 1080, itemsToShow: 3 },
  ];

  return (
    <>
      <CarouselStyles />
      <ElasticCarousel breakPoints={breakPoints}>{children}</ElasticCarousel>
    </>
  );
};

export default Carousel;
