import React, { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const INITIAL_FORM_DATA = {
    contactName: '',
    contactNumber: '',
};

const ContactForm = () => {
    const contacts = useSelector((state) => state.contactsData.contacts);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const onSubmitForm = e => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            name: formData.contactName,
            number: formData.contactNumber,
        };

        if (
            contacts.some(
                contact =>
                    contact.name.toLowerCase() === newContact.name.toLowerCase()
            )
        ) {
            alert(`${newContact.name} is already in contact list.`);
            return;
        }

        const newContacts = [newContact, ...contacts];

        dispatch(addContact(newContacts));
        reset();
    };

    const reset = () => {
        setFormData(INITIAL_FORM_DATA)
    }

  return (
    <Form onSubmit={onSubmitForm}>
      <Label>
        Name:
        <Input
          type="text"
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          value={formData.contactName}
          required
        />
      </Label>
      <Label>
        Phone number:
        <Input
          type="tel"
          name="contactNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          value={formData.contactNumber}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

export default ContactForm;
