import React, { Component } from "react";
import { CardList } from "../cardList/card-List.component";
import { SearchBox } from "../search-box/search-box";
import "./App.css";
//import { worker } from "cluster";

class App extends Component {
  constructor() {
    super();

    this.state = {
      workers: [],
      searchfield: ""
    };
  }

  handleChangeHandler = e => {
    this.setState({ searchfield: e.target.value });
  };

  searchfieldHandler() {
    const { workers, searchfield } = this.state;
    const filteredWorkers = workers.filter(work =>
      work.name
        .toLowerCase()
        .includes(
          searchfield.toLowerCase(e =>
            this.setState({ searchfield: e.target.value })
          )
        )
    );
    return filteredWorkers;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ workers: users }));
  }

  render() {
    return (
      <div className='app'>
        <h1>Workers</h1>
        <SearchBox
          placeholder='search user'
          handleChange={this.handleChangeHandler}
          id='search'
        />

        <CardList workers={this.searchfieldHandler()} />
      </div>
    );
  }
}
export default App;
