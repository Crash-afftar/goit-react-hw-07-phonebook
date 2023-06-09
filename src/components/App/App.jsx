import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [dispatch, search]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#010101',
      }}
    >
      <Container>
        <h3>Phonebook</h3>
        <ContactForm />
        <h3>Contacts</h3>
        <ContactFilter />
        <ContactList />
        
      </Container>
    </div>
  );
};