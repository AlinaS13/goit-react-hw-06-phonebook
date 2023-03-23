import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { Button, Wrap, Contact } from './Contacts.styled';
export const Contacts = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normilizedFilter);
    });
  };

  const filterName = getVisibleContacts();

  return (
    <ul>
      {filterName.map(contact => (
        <li key={contact.id}>
          <Wrap>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Wrap>
        </li>
      ))}
    </ul>
  );
};
