import React from 'react';
import PropTypes from 'prop-types';

import H4Styled from './H4Styled';

const H4 = (props) => <H4Styled {...props}>{props.children ? props.children : "H4 Heading Extra Small"}</H4Styled>;

H4.propTypes = {};

export default H4;