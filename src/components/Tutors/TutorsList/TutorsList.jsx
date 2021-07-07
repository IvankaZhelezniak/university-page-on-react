import { HiDeviceMobile, HiMail, HiLocationMarker } from 'react-icons/hi';
import university from 'data/university.json';
import {
  Container,
  Item,
  ItemInfo,
  ItemContacts,
  ItemContact,
  Options,
} from './TutorsList.styles';

function TutorsList() {
  const { tutors } = university;
  return (
    <Container>
      {tutors.map(tutor => (
        <Item key={tutor.email}>
          <div>
            <ItemInfo>{tutor.lastName}</ItemInfo>
            <ItemInfo>{tutor.firstName}</ItemInfo>
            <ItemInfo>{tutor.patronymic}</ItemInfo>
          </div>
          <ItemContacts>
            <ItemContact>
              <HiDeviceMobile size={16} />
              {tutor.phone}
            </ItemContact>
            <ItemContact>
              <HiMail size={16} />
              {tutor.email}
            </ItemContact>
            <ItemContact>
              <HiLocationMarker size={16} />
              {tutor.city}
            </ItemContact>
          </ItemContacts>
          <Options>{tutor.options}</Options>
        </Item>
      ))}
    </Container>
  );
}

export default TutorsList;
