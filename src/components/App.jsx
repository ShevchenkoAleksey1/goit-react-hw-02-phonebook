import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
      name: text.name,
      number: text.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normolizeFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacs = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacs} />
        </div>
      </>
    );
  }
}
