import PropTypes from 'prop-types';
import { Button } from './Input.styled';
export const Input = ({ onSubmit }) => {
  return (
    <div>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={value}
        // onChange={onChange}
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={value}
        // onChange={onChange}
      />
      <Button type="submit" onSubmit={onSubmit}>
        Add contact
      </Button>
    </div>
  );
};

Input.propTypes = {
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
