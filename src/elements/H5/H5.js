import React from 'react';
import PropTypes from 'prop-types';

import H5Styled from './H5Styled';

const H5 = (props) => <H5Styled {...props}>{props.children ? props.children : "H5 Body Large"}</H5Styled>;

H5.propTypes = {};

export default H5;