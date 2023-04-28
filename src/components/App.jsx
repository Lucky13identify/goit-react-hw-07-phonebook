import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList } from './contactList/ContactList';
import { ContactForm } from './сontactForm/ContactForm';
import { changeFilter } from './redux/store';
import { fetchContacts, addContact, deleteContact } from './redux/operations';
// import { addContact, changeFilter, deleteContact } from './redux/actions';

export function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const testName = data => {
    for (const item of contactsArr) {
      if (item.name === data.name) {
        console.log('YES');
        return;
      }
    }

    dispatch(addContact(data));
  };

  const filterArr = contactsArr.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue);
  });

  return (
    <div className="main-div">
      <h1>Phonebook</h1>
      <ContactForm filter={changeFilter} testName={testName} />
      <h2>Contacts</h2>
      <ul>
        <ContactList arr={filterArr} deleteF={onDelete} />
      </ul>
    </div>
  );
}
