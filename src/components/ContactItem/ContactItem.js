import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contact/actions';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <li className={css.contactItem}>
      <span className={css.contact}>
        {name} : {number}
      </span>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
