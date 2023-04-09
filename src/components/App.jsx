import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { StyledContac, StyledTitel } from './AppStyled';

export const App = () => {
  return (
    <section>
      <div>
        <StyledTitel>Phonebook</StyledTitel>
        <ContactForm />
        <StyledContac>Contacts</StyledContac>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};
