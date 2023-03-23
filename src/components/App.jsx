import React from 'react';
import { Wraper, Container } from './App.styled';
import { Input } from './input';

import { Contacts } from './contacts';
import { FilterContacts } from './filter-contacts';

export const App = () => {
  return (
    <Wraper>
      <Container>
        <h1>Phone book</h1>
        <Input />
        <h2>Contacts</h2>
        <FilterContacts />
        <Contacts />
      </Container>
    </Wraper>
  );
};
