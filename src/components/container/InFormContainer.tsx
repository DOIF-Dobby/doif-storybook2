import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Container from './Container';

/**
 * `InFormContainer` 컴포넌트는 `Form` 안에서 사용하는 Container 입니다.
 */
const InFormContainer = ({ ...props }: ComponentProps<typeof Container>) => {
  return (
    <StyledInFormContainer>
      <Container {...props} />
    </StyledInFormContainer>
  );
};

InFormContainer.defaultProps = {
  direction: 'row',
  align: 'center',
  gap: '0.5rem',
};

const StyledInFormContainer = styled.span`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export default React.memo(InFormContainer);
