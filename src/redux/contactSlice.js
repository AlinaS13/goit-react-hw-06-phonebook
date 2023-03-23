import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const itemIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(itemIndex, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
