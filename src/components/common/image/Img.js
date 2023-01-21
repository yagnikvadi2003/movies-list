import React from 'react';
import PropTypes from 'prop-types';

const Img = ({src, alt, style, className}) => {
    return (
        <img
            src={src}
            alt={alt}
            onError={(e) => {
                e.target.onerror = null
                e.target.src = '../../Assets/svg/error/noImage.svg'
            }}
            style={{style}}
            className={{className}}
        />
    )
}

Img.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    style : PropTypes.string,
    className : PropTypes.string
}

export default Img