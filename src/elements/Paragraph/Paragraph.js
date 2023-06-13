import React from 'react';
import PropTypes from 'prop-types';

import ParagraphStyled from './ParagraphStyled';

const Paragraph = (props) => <ParagraphStyled {...props}>{props.children ? props.children : "Paragraph"}</ParagraphStyled>;

Paragraph.propTypes = {};

export default Paragraph;