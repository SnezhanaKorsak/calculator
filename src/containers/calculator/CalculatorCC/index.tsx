import React from 'react';
import { connect } from 'react-redux';

import DisplayCC from 'components/display/DisplayCC';
import KeyPadCC from 'components/keyPad/keyPadCC';
import HistoryCC from 'components/history/HistoryCC';
import ControlPanelCC from 'components/controlPanel/ControlPanelCC';

import { AppRootState } from 'store';
import { setHistory } from 'reducers/historyReducer';

import {
  CalculatorCCProps,
  CalculatorState,
  MapStateProps,
  SignClickHandler,
} from 'containers/calculator/types';

import { StyledCalculator } from 'containers/calculator/styled';
import { digits, operators, signs } from 'constants/buttons';
import { calculating, checkOperatorDuplicate } from 'utils/calculating';

class CalculatorCC extends React.PureComponent<CalculatorCCProps, CalculatorState> {
  constructor(props: CalculatorCCProps) {
    super(props);

    this.state = {
      expression: '',
      currentValue: '',
      operator: '',
      result: '',
      isFinish: false,
      output: '0',
      visible: true,
    };
  }

  componentDidUpdate() {
    const { currentValue, expression, result, isFinish } = this.state;
    const { historyList, setHistory: setHistoryLS } = this.props;

    this.setState({ output: currentValue || result || '0' });

    if (expression) {
      const currentResult = calculating(expression);
      this.setState({ result: currentResult || currentValue });
    }

    if (isFinish) {
      if (expression) {
        setHistoryLS({ id: historyList.length, value: expression });
      }
      localStorage.setItem('history', JSON.stringify(historyList));
      this.setState({ expression: '' });
    }
  }

  render() {
    const { expression, currentValue, operator, result, isFinish, output, visible } = this.state;
    const { historyList } = this.props;

    const resetHandler = () => {
      this.setState({
        currentValue: '',
        expression: '',
        operator: '',
        result: '',
        isFinish: false,
      });
    };

    const cleanEntryHandler = () => this.setState({ currentValue: '', result: '' });

    const invertHandler = () => this.setState({ currentValue: String(+currentValue * -1) });

    const backHandler = () =>
      this.setState({ currentValue: currentValue.slice(0, currentValue.length - 1) });

    const signClickHandler: SignClickHandler = {
      C: resetHandler,
      CE: cleanEntryHandler,
      '←': backHandler,
      '±': invertHandler,
    };

    const buttonClickHandler = (value: string) => {
      if (operator === value) return;

      const btnValue = operators.includes(value) ? ` ${value} ` : value;
      const checkedExpression = checkOperatorDuplicate(operator, value, expression);

      if (signs.includes(value)) {
        const operation = signClickHandler[value];
        operation();
      }

      if (digits.includes(value)) {
        this.setState((state) => ({
          isFinish: false,
          currentValue: state.currentValue + btnValue,
          operator: '',
        }));
      }

      if (operators.includes(value)) {
        let newExpression = value === '=' ? currentValue : currentValue + btnValue;
        if (isFinish) {
          newExpression = result + btnValue;
        }
        this.setState((state) => ({
          currentValue: '',
          operator: value,
          expression: checkedExpression || state.expression + newExpression,
        }));
      }
      if (value !== '=') {
        this.setState({ isFinish: false });
      } else {
        this.setState({ isFinish: true, operator: '' });
      }
    };

    const toggleHistory = () => this.setState({ visible: !visible });

    return (
      <StyledCalculator>
        <div className="main-block">
          <DisplayCC output={output} displayHistory={expression} />
          <KeyPadCC onButtonClick={buttonClickHandler} />
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
