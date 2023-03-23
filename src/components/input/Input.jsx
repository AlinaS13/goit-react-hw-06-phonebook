import React from 'react';
import { Button } from './Input.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

export const Input = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    const saveContact = contacts.find(contact => contact.name === name);
    if (saveContact) {
      return alert('Contact is already added!');
    }
    dispatch(addContact(contact));
    reset(event);
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onNumberChange = event => {
    setNumber(event.target.value);
  };

  const reset = event => {
    setNumber('');
    setName('');
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={name}
          onChange={onNameChange}
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          defaultValue={number}
          onChange={onNumberChange}
        />
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
};
