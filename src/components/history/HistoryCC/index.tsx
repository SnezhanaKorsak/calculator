import React from 'react';

import { HistoryProps } from 'components/history/types';

import { StyledHistory, Title } from 'components/history/components';

class HistoryCC extends React.PureComponent<HistoryProps> {
  render(): React.ReactNode {
    const { visible, historyList } = this.props;

    return (
      <StyledHistory visible={visible}>
        <Title>HistoryCC</Title>
        {historyList.map(({ id, value }) => (
          <div key={id}>{value}</div>
        ))}
      </StyledHistory>
    );
  }
}

export default HistoryCC;
