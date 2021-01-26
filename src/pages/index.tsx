import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Main/Introduction';

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />

      <Introduction />
    </Container>
  );
};

export default IndexPage;
