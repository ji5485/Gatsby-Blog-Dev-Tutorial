import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import Introduction from 'components/Main/Introduction';
import PostList from 'components/Main/PostList';

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
      <PostList />
      <Footer />
    </Container>
  );
};

export default IndexPage;
