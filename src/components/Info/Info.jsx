import React from 'react';
import { Container, Text } from './Info.styles';
import Card from 'components/Card/Card';
import university from 'data/university';
import Paper from 'components/Paper/Paper';

function Info() {
  return (
    <Container>
      <Card name={university.name} />
      <Paper gap={32}>
        <Text>{university.description}</Text>
      </Paper>
    </Container>
  );
}

export default Info;
