import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
