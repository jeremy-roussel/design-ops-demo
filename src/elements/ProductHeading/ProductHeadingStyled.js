import styled from 'styled-components';

import ProductHeadingCss from './ProductHeadingCss';
import spacing from 'tokens/spacing';

// Extend the below as needed
const ProductHeadingStyled = styled.div`
  ${ProductHeadingCss};
  margin: 0 0 ${spacing.big} 0;
`;

export default ProductHeadingStyled;