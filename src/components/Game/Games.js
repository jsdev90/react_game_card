import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GameRow from './GameRow';

export default class Games extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            gameRows: [],
            rowTitles: [],
            clickedRowIndex: 0
        };
    }

    componentDidMount() {
        this.props.setIsCards(false);
        axios.get('https://d3gfj91pd6.execute-api.us-east-1.amazonaws.com/default/NetflixHackathonRandomCards')
            .then(json => {
                this.props.setIsCards(true);
                this.setState({ gameRows: Object.values(json.data.body.rows), rowTitles: Object.keys(json.data.body.rows)});
            });
    }

    handleRowClick(index) {
        this.setState({ clickedRowIndex: index });
    }

    render() {
        const { gameRows, rowTitles, clickedRowIndex } = this.state;
        return (
            <div className="card-deck">
                {
                    gameRows.map((row, index) => <GameRow key={index} rowIdx={index} active={clickedRowIndex === index} rowItems={row} title={rowTitles[index]} onClick={() => this.handleRowClick(index)} />)
                }
            </div>
        );
    }
}

Games.propTypes = {
    setIsCards: PropTypes.func
};