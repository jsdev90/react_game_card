import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Slider from 'react-slick';

const settings = {    
    dots: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 100,
    slidesToShow: screen.width/288,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const GameList = ({ rowItems, rowIdx, active }) => (
    <Slider {...settings}>
        {rowItems.map((game, index) => <GameCard key={index} idx={index} rowCount={rowIdx*screen.width/288} game={game} active={active}/>)}
    </Slider>
);

GameList.defaultProps = {
    rowItems: [],
    active: false,
    rowIdx: -1
};

GameList.propTypes = {
    rowItems: PropTypes.array,
    active: PropTypes.bool,
    rowIdx: PropTypes.number
};

export default GameList;