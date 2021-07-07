import React from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import Main from 'components/Main/Main';
import { Container } from './Wrapper.styles';

export const Wrapper = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};
