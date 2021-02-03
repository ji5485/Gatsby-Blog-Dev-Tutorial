import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { getRandomKey } from 'utils/utils';

type CategoryIsActive = {
  active: string;
};

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  width: 768px;
  margin: 100px auto 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={String(name === selectedCategory)}
          key={getRandomKey()}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
