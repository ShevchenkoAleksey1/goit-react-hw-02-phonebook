import { Component } from 'react';
// import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendelChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  hendleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendelChange}
          />
        </label>
        <label htmlFor="">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.hendelChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default Form;
