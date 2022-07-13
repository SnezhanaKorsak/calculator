import { HistoryItem } from 'components/history/types';

export type CalculatorState = {
  previous: string;
  current: string;
  output: string;
  operator: string;
  sign: string;
  storage: { previous: string; operator: string };
  total: boolean;
  displayHistory: string;
  visible: boolean;
};

export type MapStateProps = {
  historyList: HistoryItem[];
};

type MapDispatchProps = {
  setHistory: (history: HistoryItem) => void;
};

export type CalculatorCCProps = MapStateProps & MapDispatchProps;
