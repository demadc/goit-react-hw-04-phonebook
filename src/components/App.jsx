import { useState } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  // filter: ''

  const handleAddContact = newContact => {
    const isExist = contacts.find(contact => contact.name === newContact.name);
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts.contacts, newContact]);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const itemContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div style={{ width: 500, marginLeft: 400, marginRight: 400 }}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilter={handleFilter} />
      <ContactsList
        contacts={itemContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
