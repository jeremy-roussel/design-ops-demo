import React from 'react';
import PropTypes from 'prop-types';

import ProductImageStyled from './ProductImageStyled';

const ProductImage = (props) => <ProductImageStyled src={props.url} {...props} />;

ProductImage.propTypes = {};

export default ProductImage;