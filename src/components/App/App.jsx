import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

import './App.css';
import { useState } from 'react';
function App() {
  const contactsItems = useSelector(selectContacts);
  const [filterText] = useState('');
  const filteredContacts = contactsItems.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <p className="searchText">Find contacts by name</p>
      <SearchBox />
      {filteredContacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p className="searchText">There are no contacts in your phonebook!</p>
      )}
    </div>
  );
}

export default App;
