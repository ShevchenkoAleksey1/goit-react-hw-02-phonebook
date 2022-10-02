import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Contacts/ContactsForm';
export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}
