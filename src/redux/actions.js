import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');
export const filterContact = createAction('contacts/filterContact');
