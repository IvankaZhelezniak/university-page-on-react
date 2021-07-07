import React from 'react';
import Button from 'components/Button/Button';
import { Container, Box, Img, Title } from './Cities.styles';
import CitiesList from './CitiesList/CitiesList';
import src from './img/pin.png';

function Cities() {
  return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Города</Title>
      </Box>
      <CitiesList />
      <Button text={'Добавить город'} />
    </Container>
  );
}

export default Cities;
