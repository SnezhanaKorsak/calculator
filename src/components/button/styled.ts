import styled, { css } from 'styled-components';
import commonTheme from 'theme';

const btnCommon = css`
  width: ${commonTheme.spaces[6]}px;
  height: ${commonTheme.spaces[6]}px;
  background: ${({ theme }) => theme.background.gradient};
`;

const btnResult = css`
  width: ${commonTheme.spaces[6]}px;
  height: 92%;
  grid-column: 5 / auto;
  grid-row: 4/6;
  background: ${({ theme }) => theme.background.secondary};
`;

const btnNull = css`
  width: 100%;
  height: ${commonTheme.spaces[6]}px;
  grid-column: 1/3;
  background: ${({ theme }) => theme.background.gradient};
`;

const getBtnStyle = (className: string) => {
  if (className === 'null') return btnNull;
  if (className === 'result') return btnResult;

  return btnCommon;
};

export const StyledButton = styled.button<{ className: string }>`
  ${({ className }) => getBtnStyle(className)};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  outline: none;
  border-radius: ${commonTheme.borderRadius[1]}px;
  font-size: ${commonTheme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.background.accent};
  }
`;

export const ButtonNull = styled(StyledButton)`
  width: 100%;
  grid-column: 1/3;
`;

export const ButtonResult = styled(StyledButton)`
  height: 92%;
  grid-column: 5 / auto;
  grid-row: 4/6;
  background: ${({ theme }) => theme.background.secondary};
`;
