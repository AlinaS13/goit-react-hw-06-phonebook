import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contactSlice';

export const FilterContacts = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = event => {
    // onChangeInput(event.target.value);
    dispatch(filterContact(event.target.value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        defaultValue={filter}
      />
    </div>
  );
};
