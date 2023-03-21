import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wraper } from './App.styled';
import { Phonebook } from './phonebook';
import { Section } from './section';
import { Contacts } from './contacts';
import { FilterContacts } from './filter-contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const findeItem = this.state.contacts.find(
      contact => contact.name === query
    );
    if (findeItem) {
      alert(`${query} is alredy in contacts`);
    } else {
      this.setState(prevState => ({
        ...prevState,
        contacts: prevState.contacts.concat({
          name: query,
          id: nanoid(),
          number: number,
        }),
      }));
    }
    event.target.reset();
  };

  handleChengeInput = str => {
    this.setState(prevState => ({
      filter: str,
    }));
  };

  applyFilters = () => {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.number.includes(this.state.filter)
    );
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Wraper>
        <Section title="Phone book">
          <Phonebook onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            filter={filter}
            onChangeInput={this.handleChengeInput}
          />
          <Contacts
            onSubmit={this.handleSubmit}
            contacts={this.applyFilters()}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </Wraper>
    );
  }
}
