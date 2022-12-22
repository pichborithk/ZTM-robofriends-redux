import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

// to use state need to use Class method
// const App = () => {
//   return (
//     <>
//       <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots={robots} />
//       </div>
//     </>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase())
    );
    if (this.state.robots.length === 0) {
      return (
        <>
          <p>Loading...</p>;
        </>
      );
    } else {
      return (
        <>
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </>
      );
    }
  }
}

export default App;
