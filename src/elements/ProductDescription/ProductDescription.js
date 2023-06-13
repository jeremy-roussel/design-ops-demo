import React from 'react';
import PropTypes from 'prop-types';

import ProductDescriptionStyled from './ProductDescriptionStyled';

const ProductDescription = (props) => <ProductDescriptionStyled {...props}>{props.children ? props.children : "This is a fine flower grown from quality seeds in a garden near you. Price includes pot and saucer."}</ProductDescriptionStyled>;

ProductDescription.propTypes = {};

export default ProductDescription;