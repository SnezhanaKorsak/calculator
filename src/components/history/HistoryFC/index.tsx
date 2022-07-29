import React from 'react';

import { HistoryProps } from 'components/history/types';

import { StyledHistory, Title } from 'components/history/styled';

const HistoryFC: React.FC<HistoryProps> = ({ historyList, visible }) => (
  <StyledHistory visible={visible} id="history">
    <Title>History</Title>
    <div id="history-list">
      {historyList.map(({ id, value }) => (
        <div key={id}>{value}</div>
      ))}
    </div>
  </StyledHistory>
);

export default HistoryFC;
