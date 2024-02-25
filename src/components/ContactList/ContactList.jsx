import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';
import { selectTextFilter } from '../../redux/filtersSlice.js';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};

const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const filterText = useSelector(selectTextFilter);

  const filteredContacts = filterContacts(allContacts, filterText);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
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
