import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id + name}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
