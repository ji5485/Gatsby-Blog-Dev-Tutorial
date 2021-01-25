import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Introduction from 'components/Main/Introduction';

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <Introduction />
    </Container>
  );
};

export default IndexPage;
