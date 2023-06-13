import styled from 'styled-components';

import ProductImageCss from './ProductImageCss';
import radii from 'tokens/radii';

// Extend the below as needed
const ProductImageStyled = styled.img`
  ${ProductImageCss};
  height: ${(props) => props.height || "296px"};
  border-radius: ${radii.rounded} ${radii.rounded} 0 0;
  border-radius: ${(props) => props.hardCorners && "0"};
`;

export default ProductImageStyled;