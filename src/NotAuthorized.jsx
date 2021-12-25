import React from 'react';

import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <Text>🚫 잘못된 경로로 접근하였습니다 🚫</Text>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;
