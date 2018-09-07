import React from 'react';
import PropTypes from 'prop-types';

const getBGColor = (rgb) => {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

const GameCard = ({game, active, idx, rowCount}) => (
    <div className={active ? 'game-card actived' : 'game-card'} style={{ animationDelay: `${idx*0.2+rowCount*0.2}s`}}>
        <div className="game-inner-card" style={{ backgroundColor: getBGColor(game.background_color_rgb)}}>
            <span className="card-title">{game.title}</span>
        </div>
    </div>
);

GameCard.defaultProps = {
    game: {},
    active: false,
    idx: 0,
    rowCount: 0
};

GameCard.propTypes = {
    game: PropTypes.object,
    active: PropTypes.bool,
    idx: PropTypes.number,
    rowCount: PropTypes.number
};

export default GameCard;