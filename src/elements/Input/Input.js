import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = (props) => <InputStyled type="text" placeholder="Placeholder text" {...props} />;

Input.propTypes = {};

export default Input;