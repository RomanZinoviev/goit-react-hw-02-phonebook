import { Component } from "react";

export class App extends Component{
  state = {
  contacts: [],
  name: ''
  }

  
  render() {
    return (
      <label htmlFor="name">Name
        <input
          value={this.state.name}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </label>
    )
  }
}