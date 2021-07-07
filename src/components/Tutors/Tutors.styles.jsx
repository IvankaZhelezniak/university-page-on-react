import styled from '@emotion/styled/macro';

export const Container = styled.div`
  margin-bottom: 32px;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  grid-column-gap: 8px;
  margin-bottom: 40px;
  align-items: center;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
`;
