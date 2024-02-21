import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';

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
    dispatch(deleteContact(id));
  };
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <p className="searchText">Find contacts by name</p>
      <SearchBox filterText={filterText} onFilterChange={setFilterText} />
      {filteredContacts.length !== 0 ? (
        <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
      ) : (
        <p className="searchText">There are no contacts in your phonebook!</p>
      )}
    </div>
  );
}

export default App;
