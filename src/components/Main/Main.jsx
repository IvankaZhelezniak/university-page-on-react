import React from 'react';
import Info from 'components/Info/Info';
import PageHeader from 'components/PageHeader/PageHeader';
import Tutors from 'components/Tutors/Tutors';
import { MainContainer } from './Main.styles';
import Cities from 'components/Cities/Cities';
import Departments from 'components/Departments/Departments';

function Main() {
  return (
    <MainContainer>
      <PageHeader />
      <Info />
      <Tutors />
      <Cities />
      <Departments />
    </MainContainer>
  );
}

export default Main;
