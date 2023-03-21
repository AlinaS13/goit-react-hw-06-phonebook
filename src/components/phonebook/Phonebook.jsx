import PropTypes from 'prop-types';
import { Input } from 'components/input';

export const Phonebook = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input onSubmit={onSubmit} />
    </form>
  );
};

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
