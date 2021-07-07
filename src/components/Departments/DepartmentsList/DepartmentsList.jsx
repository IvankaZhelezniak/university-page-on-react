import Paper from 'components/Paper/Paper';
import data from 'data/university.json';
import { Container, Text } from './DepartmentsList.styled';

function DepartmentsList() {
  return (
    <Container>
      {data.department.map(department => (
        <Paper key={department.name} gap={12}>
          <Text>{department.name}</Text>
        </Paper>
      ))}
    </Container>
  );
}

export default DepartmentsList;
