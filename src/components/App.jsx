import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';

import Form from './Contacts/ContactsForm';
export class App extends Component {
  // state = {
  //   contacts: [],
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = text => {
    const contact = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}
