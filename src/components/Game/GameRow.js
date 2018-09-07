import React from 'react';
import PropTypes from 'prop-types';
import GameList from './GameList';

const GameRow = ({ title, rowItems, onClick, active, rowIdx }) => (
    <div className="game-row" onClick={onClick}>
        <p className={active ? 'game-title actived' : 'game-title'}>{title}</p>
        <div className="game-list">{<GameList rowIdx={rowIdx} rowItems={rowItems} active={active} />}</div>
    </div>
);

GameRow.defaultProps = {
    rowItems: [],
    title: '',
    active: false,
    rowIdx: -1
};

GameRow.propTypes = {
    rowItems: PropTypes.array,
    title: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    rowIdx: PropTypes.number
};

export default GameRow;