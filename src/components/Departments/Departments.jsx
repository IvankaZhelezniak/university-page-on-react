import Button from 'components/Button/Button';
import { Container, Box, Img, Title } from './Departments.styled';
import DepartmentsList from './DepartmentsList/DepartmentsList';
import src from './img/robot.png';

function Departments() {
  return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Факультет</Title>
      </Box>
      <DepartmentsList />
      <Button text={'Добавить факультет'} />
    </Container>
  );
}

export default Departments;
