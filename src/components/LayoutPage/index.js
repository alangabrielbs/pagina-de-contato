import React from 'react';
import { node } from 'prop-types';

import GlobalStyles from '../../theme/GlobalStyles';
import { Container, Content } from './styles';

export default function LayoutPage({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Content>{children}</Content>
    </Container>
  );
}

LayoutPage.propTypes = {
  children: node.isRequired,
};
