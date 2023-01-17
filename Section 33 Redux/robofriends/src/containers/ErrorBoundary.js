import React, { Component } from 'react';

// catches error inside those components which come inside this errorboundary wrapper
class ErrorBoundary extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // Life Cycle Hook
    componentDidCatch(){
        this.setState({hasError: true});
    }

    // if error show error otherwise render the App
    render(){
        return this.state.hasError ? 
        <h1>The CardList Component failed to Load</h1> : this.props.children;
    }
}

export default ErrorBoundary;