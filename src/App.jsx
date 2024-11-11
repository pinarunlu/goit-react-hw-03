import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  // localStorage'dan ilk değeri alma işlemi
  const getInitialContacts = () => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  };

  // Başlangıçta contacts state'ini getInitialContacts fonksiyonundan al
  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');

  // Yerel depolamaya veri kaydetme
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Yeni kişi ekleme fonksiyonu
  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  // Kişi silme fonksiyonu
  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  // Arama filtresi değişikliklerini güncelleyen fonksiyon
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Arama filtresine göre filtrelenmiş kişileri getiren fonksiyon
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
