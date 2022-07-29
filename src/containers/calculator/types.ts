import { HistoryItem } from 'components/history/types';

export type CalculatorState = {
  expression: string;
  currentValue: string;
  operator: string;
  result: string;
  isFinish: boolean;
  output: string;
  visible: boolean;
};

export type MapStateProps = {
  historyList: HistoryItem[];
};

type MapDispatchProps = {
  setHistory: (history: HistoryItem) => void;
};

export type CalculatorCCProps = MapStateProps & MapDispatchProps;

export type SignClickHandler = {
  [key: string]: () => void;
};
