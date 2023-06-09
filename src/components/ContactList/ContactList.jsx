import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ButtonDelete } from './ContactList.styled';
import { selectContactsList } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const defaultMessage = contacts.length === 0;
  return (
    <List>
      {defaultMessage && (
        <h3>there are no contacts in the list yet</h3>
      )}

      {contacts.map(({ name, phone, id }) => (
        <ListItem key={id}>
          <span>{`${name}: ${phone}`}</span>
          <ButtonDelete
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            X
          </ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;