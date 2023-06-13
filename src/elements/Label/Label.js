import React from 'react';
import PropTypes from 'prop-types';

import LabelStyled from './LabelStyled';

const Label = (props) => <LabelStyled {...props}>{props.children ? props.children : "Label"}</LabelStyled>;

Label.propTypes = {};

export default Label;