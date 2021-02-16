import React, { FunctionComponent } from 'react';
import Template from 'components/Common/Template';
import PostHead from 'components/Post/PostHead';
import PostContent from 'components/Post/PostContent';

interface InfoPageProps {}

const InfoPage: FunctionComponent<InfoPageProps> = function (props) {
  console.log(props);
  return (
    <Template>
      <PostHead />
      <PostContent />
    </Template>
  );
};

export default InfoPage;
