import styled from 'styled-components';

export const StyledHistory = styled.div<{ visible: boolean }>`
  width: 100%;

  height: 100%;

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  overflow: auto;
  margin-right: 15px;
  padding: 0 10px;

  font-size: 14px;
`;

export const Title = styled.h3`
  margin: 0 -10px 10px 0;
  padding-right: 0;

  text-align: center;
`;
