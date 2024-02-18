import './App.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import { setNameFilter } from '../../redux/filtersSlice.js';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();

  // Використовуємо локальний стан для збереження контактів та фільтрації
  const [contacts, setContacts] = useState(() => {
    try {
      const storedContacts = localStorage.getItem('contacts');
      return storedContacts
        ? JSON.parse(storedContacts)
        : [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ];
    } catch (error) {
      console.error('Error parsing stored contacts:', error);
      return [];
    }
  });

  const [filterText, setFilterText] = useState('');

  // Фільтруємо контакти на основі тексту фільтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = filterValue => {
    useDispatch(setNameFilter(filterValue));
    setFilterText(filterValue);
  };

  const onAddContact = newContact => {
    setContacts(prevContacts => {
      const isContact = prevContacts.some(contact => contact.name === newContact.name);
      if (!isContact) {
        return [...prevContacts, { id: nanoid(), ...newContact }];
      }
      alert(`Contact name ${newContact.name} with number ${newContact.number} is already added.`);
      return prevContacts;
    });
  };

  const onDelete = id => {
    const updateContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updateContacts);
  };

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error storing contacts in local storage:', error);
    }
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <p className="searchText">Find contacts by name</p>
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
