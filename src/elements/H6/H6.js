import React from 'react';
import PropTypes from 'prop-types';

import H6Styled from './H6Styled';

const H6 = (props) => <H6Styled {...props}>{props.children ? props.children : "H6 Body Medium"}</H6Styled>;

H6.propTypes = {};

export default H6;