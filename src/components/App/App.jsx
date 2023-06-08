import React from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../ContactFilter/ContactFilter';
import { Container } from './App.styled';

import { addContact } from 'redux/contactsSlice';

const App = () => {

  const dispatch = useDispatch();

  const addNewContact = (formData) => {
    dispatch(addContact(formData));
  }

  return (
    <Container>
      <h1>PHONEBOOK</h1>
      <ContactForm addContact={addNewContact} />

      <h2>CONTACTS</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;