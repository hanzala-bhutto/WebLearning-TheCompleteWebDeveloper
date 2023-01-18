import React, { Component } from 'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField : state.searchField
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        onSearchChange : (event) => {
            dispatch(setSearchField(event.target.value));
        }
    }
}

// Concepts of Life Cycle Hooks
// Mounting
// Updating
// UnMounting

class App extends Component{

    constructor(){
        super();
        this.state = {
            robots : []
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

    render(){
        // filter state property robots using searchfield value taken from event input value 
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return robots.length === 0 ?
        (<div className='container'>
                    <h1 className='f1'>Loading ...</h1>
                </div>
        ) 
        :  
            // communicate OnSeachChange method to SearchBox
            // communicate filterRobots to CardList
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/> 
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )


    }
}

export default connect(mapStateToProps,dispatchStateToProps)(App);