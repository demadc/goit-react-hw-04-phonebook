import { useState, useEffect } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const isExist = contacts.find(contact => contact.name === newContact.name);
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
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

  const clearLocalStorage = () => {
    localStorage.clear();
    setContacts(initialContacts); // Очищаю локалсторидж, щоб на сторінці рендерилися контакти з initialContacts
  };

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

      <button type="button" onClick={clearLocalStorage}>
        Скидання
      </button>
    </div>
  );
}
