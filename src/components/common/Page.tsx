import React from 'react';
import styled from 'styled-components';

interface PageProps {
  children: React.ReactNode;
}

/**
 * `Page` 컴포넌트는 말 그대로 페이지 그 자체이다.
 * Page 안에 `Box` 컴포넌트를 위치시키고 Box 컴포넌트 안에는 여러가지 컴포넌트를 위치시킨다.
 */
const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.subColors.pageBackground};
  padding: 0.75rem;
`;

export default React.memo(Page);
