import React from 'react';
import { Container, Box, Title, Img } from './Tutors.styles';
import TutorsList from 'components/Tutors/TutorsList/TutorsList';
import Button from 'components/Button/Button';
import src from './img/cat.png';

function Tutors() {
  return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Преподаватели</Title>
      </Box>
      <TutorsList />
      <Button text={'Добавить преподавателя'} />
    </Container>
  );
}

export default Tutors;
