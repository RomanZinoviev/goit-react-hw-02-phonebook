import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  hundleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  hundleSubmit = event => {
      event.preventDefault();
      const sameName = this.props.array.find((arr) => arr.name === this.state.name);
      if(sameName){return alert(`${this.state.name} is already in contacts`)}
      const nameObj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
      };
      this.props.onSubmit(nameObj)
    
    this.reset();
    };
    render() {
        return (
            <form action="">
          <label htmlFor="name">
            Name
            <input
              value={this.state.name}
              onChange={this.hundleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">Telephone
            <input
              type="tel"
              value={this.state.number}
              onChange={this.hundleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" onClick={this.hundleSubmit}>
            Add contact
          </button>
        </form>)
    }
}
