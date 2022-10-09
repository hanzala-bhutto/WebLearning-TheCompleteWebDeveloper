import React, { Component } from 'react';
// import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';


// Concepts of Life Cycle Hooks
// Mounting
// Updating
// UnMounting

class App extends Component{

    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    // Mounting
    // Using jsonplaceholder api endpoint to get json data of 10 users
    // If application has started then change the state of robots field
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}));
    }

    // whenever creating custom method, use arrow function to properly indicate where is the event taking place
    onSearchChange = (event) => {
        // update state property searhfield
        this.setState({searchfield : event.target.value});
    }

    render(){
        // filter state property robots using searchfield value taken from event input value 
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0){
            return (
                <div className='container'>
                    <h1 className='f1'>Loading ...</h1>
                </div>
          )
        }
        else{
            // communicate OnSeachChange method to SearchBox
            // communicate filterRobots to CardList
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/> 
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }


    }
}

export default App;