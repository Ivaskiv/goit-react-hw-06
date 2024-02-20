import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';

import './App.css';
function App() {
  const contactsItems = useSelector(selectContacts);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <p className="searchText">Find contacts by name</p>
      {/* <SearchBox onFilterChange={handleFilterChange} /> */}
      {contactsItems.length !== 0 ? (
        <>
          <SearchBox />
          <ContactList />
        </>
      ) : (
        'There are no contacts in your phonebook. Please add your first contact!'
      )}
    </div>
  );
}

export default App;
