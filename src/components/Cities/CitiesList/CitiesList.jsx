import Paper from 'components/Paper/Paper';
import data from 'data/university.json';
import { Container, Text } from './CitiesList.styles';

function CitiesList() {
  return (
    <Container>
      {data.cities.map(city => (
        <Paper key={city} gap={14}>
          <Text>{city}</Text>
        </Paper>
      ))}
    </Container>
  );
}

export default CitiesList;
