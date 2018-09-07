import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import logo from '../images/logo.png';

const Header = (props) => (
    <nav className="header" style={{ height: props.isCards ? '530px' : '100vh' }}>
        <div className="left-container">
            <h1>{props.title}</h1>
            <div className="star-container">
                <StarRating />
                <span className="year-season">2013</span>
                <span className="tv-ma">tv-ma</span>
                <span className="year-season">1 Season</span>
                <span className="hd-version">HD</span>
                <span className="hd-version">5.1</span>
            </div>
            <p className="description">
                Sharks gliding ominously beneath the surface<br /> of the water? They`re a lot less menacing than<br /> his Congressman.
            </p>
            <div className="cup-container">
                <i className="fa fa-trophy fa-lg trophy-icon"></i>
                <span className="cup-description">
                    This winner of three Emmys, including<br /> Outstanding Directing for David Fincher, stars<br /> Kevin Spacey and Robin Wright.
                </span>
            </div>
        </div>
        <div className="right-container">
            <img src={logo}/>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title',
    isCards: false
};

Header.propTypes = {
    title: PropTypes.string,
    isCards: PropTypes.bool
};

export default Header;