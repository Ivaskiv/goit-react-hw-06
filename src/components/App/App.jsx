import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Contact from '../Contact/Contact.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice.js';

import './App.css';
import { useState } from 'react';
function App() {
  const contactsItems = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');

  const filteredContacts = contactsItems.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const handleDeleteContact = id => {
    // диспетчер для виклику екшена видалення
    dispatch(deleteContact(id));
  };
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <p className="searchText">Find contacts by name</p>
      <SearchBox filterText={filterText} onFilterChange={setFilterText} />
      {filteredContacts.length !== 0 ? (
        <ContactList>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={() => handleDeleteContact}
            />
          ))}
        </ContactList>
      ) : (
        'There are no contacts in your phonebook. Please add your first contact!'
      )}
    </div>
  );
}

export default App;
