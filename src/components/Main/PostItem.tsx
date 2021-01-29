import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { getRandomKey } from 'utils/utils';

export interface PostItemProps {
  title: string;
  thumbnail: string;
  date: string;
  category: string[];
  summary: string;
  link: string;
}

const PostItemWrapper = styled(Link)`
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.3s box-shadow;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const PostItemContent = styled.div`
  padding: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 15px -5px;
`;

const CategoryItem = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  color: white;
  margin: 0 5px;
`;

const Summary = styled.div`
  font-size: 16px;
  opacity: 0.8;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  thumbnail,
  date,
  category,
  summary,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostImage src={thumbnail} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {category.map(item => (
            <CategoryItem key={getRandomKey()}>{item}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
