import React from 'react';
import PropTypes from 'prop-types';

import ProductHeadingStyled from './ProductHeadingStyled';

const ProductHeading = (props) => <ProductHeadingStyled {...props}>{props.children ? props.children : "Some product"}</ProductHeadingStyled>;

ProductHeading.propTypes = {};

export default ProductHeading;