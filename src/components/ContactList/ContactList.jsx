import { Contact } from 'components/Contact/Contact';

import { StyledContactList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );
  return (
    <StyledContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </StyledContactList>
  );
};
