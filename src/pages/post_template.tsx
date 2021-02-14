import React, { FunctionComponent } from 'react';
import Template from 'components/Common/Template';
import PostHead from 'components/Post/PostHead';

interface InfoPageProps {}

const InfoPage: FunctionComponent<InfoPageProps> = function () {
  return (
    <Template>
      <PostHead />
    </Template>
  );
};

export default InfoPage;
