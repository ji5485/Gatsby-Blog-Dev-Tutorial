import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { getRandomKey } from 'utils/utils';

const CATEGORY_LIST = [
  {
    name: 'Web',
    count: 4,
  },
  {
    name: 'Architecture',
    count: 3,
  },
  {
    name: 'Optimization',
    count: 9,
  },
  {
    name: 'Security',
    count: 7,
  },
];

type CategoryIsActive = {
  active: boolean;
};

interface CategoryListProps {
  category?: string;
}

const CategoryListWrapper = styled.div`
  width: 768px;
  margin: 100px auto 0;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div<CategoryIsActive>`
  font-size: 18px;
  margin-right: 20px;
  padding: 5px 0;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? '800' : '400')};

  &:last-of-type {
    margin-right: 0;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  category,
}) {
  return (
    <CategoryListWrapper>
      {CATEGORY_LIST.map(({ name, count }) => (
        <CategoryItem active={name === category} key={getRandomKey()}>
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
