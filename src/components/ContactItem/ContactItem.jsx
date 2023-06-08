import React from 'react';
import { ButtonDelete, ListItem } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return(
    <ListItem key={id}>
      {name}: {number}
      <ButtonDelete
        type="button"
        value={id}
        onClick={() => dispatch(deleteContact(id))}>
        X
      </ButtonDelete>
    </ListItem>
  )
};

export default ContactItem;

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };