import { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
