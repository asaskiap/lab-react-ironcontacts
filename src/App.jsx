import './App.css';
import contacts from './contacts.json';
import React from 'react';

class TableElement extends React.Component {
  render() {
    return (
      <div className="TableElement">
        <img src={this.props.picture} alt="coolPic" />
        <p>{this.props.name}</p>
        <p>{this.props.popularity}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.people = contacts.slice(0, 5);
  }

  addRandomContact = () => {
    console.log('clicked');
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomContact);
    const newPeopleArray = this.people;
    newPeopleArray.push(randomContact);
    this.setState({
      people: newPeopleArray
    });
  };

  sortByName = () => {
    console.log('sort by name');
    this.setState({
      people: this.people.sort((a, b) => (a.name > b.name ? 1 : -1))
    });
  };

  sortByPopularity = () => {
    console.log('sort by popularity');
    this.setState({
      people: this.people.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
    });
  };

  removeContact = (e) => {
    // console.log('remove contact ');
    // console.log(e.target.id);
    const index = e.target.id;
    const newArray = this.people;
    newArray.splice(index, 1);
    this.setState({
      people: newArray
    });
  };
  render() {
    console.log(contacts);
    console.log(this.people);
    return (
      <div className="displayTable">
        <h1>Iron Contacts</h1>

        <p>
          <span>Picture</span>
          <span>Name</span>
          <span>Popularity</span>
        </p>

        {this.people.map((person, index) => {
          return (
            <div>
              <TableElement
                key={person._id}
                picture={person.pictureUrl}
                name={person.name}
                popularity={person.popularity}
              ></TableElement>
              <button onClick={this.removeContact} id={index}>
                Delete
              </button>
            </div>
          );
        })}
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <button onClick={this.addRandomContact}>Add random Contact</button>
      </div>
    );
  }
}

export default App;
