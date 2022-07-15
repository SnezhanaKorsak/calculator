import React from 'react';
import { connect } from 'react-redux';

import DisplayCC from 'components/display/DisplayCC';
import KeyPadCC from 'components/keyPad/keyPadCC';
import HistoryCC from 'components/history/HistoryCC';
import ControlPanelCC from 'components/controlPanel/ControlPanelCC';

import { AppRootState } from 'store';
import { setHistory } from 'reducers/historyReducer';

import { Calculator } from 'utils/Calculator';
import { calculatingBrackets } from 'utils/calculatingBrackets';

import { CalculatorCCProps, CalculatorState, MapStateProps } from 'containers/calculator/types';

import { StyledCalculator } from 'containers/calculator/components';

const calculator = new Calculator();

const digits = '0123456789.';
const operators = '+-x/%=';
const signs = ['C', 'CE', '±', '←', '(', ')'];

class CalculatorCC extends React.PureComponent<CalculatorCCProps, CalculatorState> {
  constructor(props: CalculatorCCProps) {
    super(props);

    this.state = {
      previous: '',
      current: '',
      output: '0',
      operator: '',
      sign: '',
      total: false,
      displayHistory: '',
      visible: true,
    };
  }

  componentDidUpdate() {
    const { current, previous, sign, displayHistory, total } = this.state;
    const { historyList, setHistory: setHistoryLS } = this.props;

    if (sign === 'CE' || sign === '←') {
      this.setState({ output: current || '0' });
    } else {
      this.setState({ output: current || previous || '0' });
    }

    if (displayHistory.includes(')')) {
      const result = calculatingBrackets(displayHistory);
      if (result) {
        this.setState({
          previous: result.toString(),
        });
      }
    }
    if (total) {
      if (displayHistory) {
        setHistoryLS({ id: historyList.length, value: displayHistory });
      }
      this.setState({ displayHistory: '' });
    }
  }

  render() {
    const { current, previous, operator, total, output, displayHistory, visible } = this.state;
    const { historyList } = this.props;

    const numberClickHandler = (value: string) => {
      if (current.includes('.') && value === '.') return;

      if (total) {
        this.setState({ previous: '' });
      }
      this.setState((state) => ({ current: state.current + value, sign: '', total: false }));
    };

    const operatorClickHandler = (value: string) => {
      this.setState({ operator: value });

      if (current === '') return;

      if (previous !== '' && !displayHistory.includes('(')) {
        const result = calculator.execute(operator, previous, current).toString();
        this.setState({ previous: result, current: '' });
      } else {
        this.setState({ previous: current, current: '' });
      }
    };

    const resetHandler = () => {
      this.setState({ previous: '', current: '', operator: '', sign: '', displayHistory: '' });
    };

    const cleanEntryHandler = () => this.setState({ current: '', sign: 'CE' });

    const invertHandler = () => this.setState({ current: String(+current * -1) });

    const backHandler = () => {
      this.setState({ current: current.slice(0, current.length - 1), sign: '<' });
    };

    const rightBracket = () => this.setState({ current: '' });

    const signClickHandler = (value: string) => {
      switch (value) {
        case 'C':
          return resetHandler();

        case 'CE':
          return cleanEntryHandler();

        case '←':
          return backHandler();

        case '±':
          return invertHandler();

        case ')':
          return rightBracket();

        default:
          return '';
      }
    };

    const buttonClickHandler = (value: string) => {
      if (digits.includes(value)) {
        numberClickHandler(value);
      }

      if (operators.includes(value)) {
        this.setState({ total: value === '=' });
        operatorClickHandler(value);
      }

      if (signs.includes(value)) {
        signClickHandler(value);
      }

      if (operators.includes(value) || value === '(' || value === ')') {
        const number = total ? previous : current;
        this.setState((state) => ({
          displayHistory: `${state.displayHistory} ${number} ${value === '=' ? '' : value}`,
        }));
      }
    };

    const toggleHistory = () => this.setState({ visible: !visible });

    return (
      <StyledCalculator>
        <div className="main-block">
          <DisplayCC output={output} displayHistory={displayHistory} />
          <KeyPadCC callback={buttonClickHandler} />
        </div>
        <HistoryCC historyList={historyList} visible={visible} />
        <ControlPanelCC visible={visible} toggleHistory={toggleHistory} />
      </StyledCalculator>
    );
  }
}

const mapStateToProps = (state: AppRootState): MapStateProps => ({
  historyList: state.history.historyList,
});

export default connect(mapStateToProps, { setHistory })(CalculatorCC);
