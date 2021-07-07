import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/cardList/CardList";
import SearchBox from "./Components/searchBox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      saerchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ saerchField: e.target.value })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, saerchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(saerchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
