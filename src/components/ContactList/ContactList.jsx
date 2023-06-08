import React from 'react';

import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contactsData.contacts);
  const filter = useSelector((state) => state.contactsData.filter);
  
  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
      return <ContactItem name={name} number={number} key={id} id={id} />
    })}
    </List>
  )
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };