import React from 'react';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width-15}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};

const StarRating = () => {

    return (
        <div className="star-rating">
            <div style={styles.starsOuter}>
                <div>
                    <div style={styles.starsEmptyInner}>
                        <i className="fa fa-star fa-lg checked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg checked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg checked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg checked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg checked" style={styles.star}></i>
                    </div>
                    <div style={styles.starsInner}>
                        <i className="fa fa-star fa-lg unchecked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg unchecked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg unchecked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg unchecked" style={styles.star}></i>
                        <i className="fa fa-star fa-lg unchecked" style={styles.star}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarRating;