import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  padding: 50px 0;
  display: grid;
  place-items: center;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer Hyun, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
