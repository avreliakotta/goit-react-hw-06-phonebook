import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts || []);
  // const filter = useSelector(state => state.contacts.filter);
  const contactsState = useSelector(state => state.contacts || {});
  const filter = useSelector(state => state.contacts.filter);
  const contacts = contactsState.contacts || [];
  console.log('contacts', contacts);
  console.log('filter', filter);
  if (!Array.isArray(contacts)) {
    return null;
  }
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  console.log('filteredContacts', filteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
    </ul>
  );
};
