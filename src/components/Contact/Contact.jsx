import PropTypes from 'prop-types';
import { StyledContacts, StyledButton } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <StyledContacts>
      <span>{name}: </span>
      <span>{number} </span>
      <StyledButton
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </StyledButton>
    </StyledContacts>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
