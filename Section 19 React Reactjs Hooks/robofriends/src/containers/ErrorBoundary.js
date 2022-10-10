import React, { Component } from 'react';

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

    render(){
        if(this.state.hasError){
            return <h1>The CardList Component failed to Load</h1>
        }
    }
}

export default ErrorBoundary;