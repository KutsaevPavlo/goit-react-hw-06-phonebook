import PropTypes from 'prop-types';
import { StyledContacts, StyledButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const distpach = useDispatch();
  return (
    <StyledContacts>
      <span>{name}: </span>
      <span>{number} </span>
      <StyledButton
        onClick={() => {
          distpach(deleteContact(id));
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
};
