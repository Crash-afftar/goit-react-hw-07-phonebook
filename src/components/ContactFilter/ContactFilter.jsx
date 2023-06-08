import { Label, Input } from './ContactFilter.styled';
import { filterContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
    const filter = useSelector((state) => state.contactsData.filter);

    const dispatch = useDispatch();
    const onChangeFilter = e => {
        dispatch(filterContact(e.target.value))
    };

    return (     
            <Label>
                Find contacts by name:
                <Input
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={onChangeFilter}
                    value={filter}
                    required
                />
            </Label>
   )
};

export default Filter;