export type HistoryItem = {
  id: number;
  value: string;
};

export type HistoryProps = {
  historyList: HistoryItem[];
  visible: boolean;
};
