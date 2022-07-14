import React from 'react';

import { HistoryProps } from 'components/history/types';

import { StyledHistory, Title } from 'components/history/components';

function HistoryFC({ historyList, visible }: HistoryProps) {
  return (
    <StyledHistory visible={visible}>
      <Title>History</Title>
      {historyList.map(({ id, value }) => (
        <div key={id}>{value}</div>
      ))}
    </StyledHistory>
  );
}

export default HistoryFC;
