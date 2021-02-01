import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { getRandomKey } from 'utils/utils';

const CATEGORY_LIST = [
  {
    name: 'ALL',
    count: 10,
  },
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
  active: string;
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

const CategoryItem = styled(Link)<CategoryIsActive>`
  font-size: 18px;
  margin-right: 20px;
  padding: 5px 0;
  cursor: pointer;
  font-weight: ${({ active }) => (active === 'true' ? '800' : '400')};

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
        <CategoryItem
          to={`/?category=${name}`}
          active={String(name === category)}
          key={getRandomKey()}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
