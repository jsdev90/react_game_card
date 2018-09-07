import React, { Component } from 'react';
import Header from './Header';
import Games from './Game/Games';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'House of Cards',
            isCards: false
        };
    }

    handleIsCards(isCards) {
        this.setState({ isCards });
    }

    render() {
        return (
            <div className='container'>
                <Header title={this.state.title} isCards={this.state.isCards}/>
                <Games setIsCards={(isCards) => this.handleIsCards(isCards)} />
            </div>
        );
    }
}