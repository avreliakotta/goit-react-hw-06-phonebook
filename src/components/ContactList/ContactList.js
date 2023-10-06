import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts || []);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

// export const ContactList = () => {
//   const contactsState = useSelector(state => state.contacts || {});
//   console.log('state', contactsState);
//   const filter = useSelector(state => state.contacts.filter);
//   console.log('filter', filter);
//   const contacts = contactsState.contacts || [];

//   if (!Array.isArray(contacts)) {
//     return null;
//   }
//   const filteredContacts = filter
//     ? contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       )
//     : contacts;
//   console.log('filteredContacts', filteredContacts);

//   return (
//     <ul className={css.contactList}>
//       {filteredContacts &&
//         filteredContacts.map(({ id, name, number }) => {
//           return <ContactItem key={id} name={name} number={number} id={id} />;
//         })}
//     </ul>
//   );
// };
