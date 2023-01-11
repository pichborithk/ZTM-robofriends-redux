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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    );
    return !robots.length ? ( //robots.length === 0
      <>
        <p>Loading...</p>;
      </>
    ) : (
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

export default App;
