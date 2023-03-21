import { nanoid } from 'nanoid';
import { Wraper } from './App.styled';
import { Phonebook } from './phonebook';
import { Section } from './section';
import { Contacts } from './contacts';
import { FilterContacts } from './filter-contacts';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const findItem = contacts.find(contact => contact.name === query);

    if (findItem) {
      alert(`${query} is alredy in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        {
          name: query,
          id: nanoid(),
          number: number,
        },
      ]);
    }
    event.target.reset();
  };

  const handleChengeInput = str => {
    setFilter(str);
  };

  const applyFilters = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };
  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Wraper>
      <Section title="Phone book">
        <Phonebook onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <FilterContacts filter={filter} onChangeInput={handleChengeInput} />
        <Contacts
          contacts={applyFilters()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </Wraper>
  );
};
