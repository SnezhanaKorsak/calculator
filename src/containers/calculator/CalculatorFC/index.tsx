import React, { useEffect, useState } from 'react';

import DisplayFC from 'components/display/DisplayFC';
import KeyPadFC from 'components/keyPad/KeyPadFC';
import ControlPanelFC from 'components/controlPanel/ControlPanelFC';
import HistoryFC from 'components/history/HistoryFC';

import { Calculator } from 'utils/Calculator';
import { calculatingBrackets } from 'utils/calculatingBrackets';

import { StyledCalculator } from 'containers/calculator/components';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { setHistory } from 'reducers/historyReducer';

const calculator = new Calculator();

const digits = '0123456789.';
const operators = '+-x/%=';
const signs = ['C', 'CE', '±', '←', '(', ')'];

function CalculatorFC() {
  const dispatch = useAppDispatch();
  const historyList = useAppSelector((state) => state.history.historyList);

  const [displayHistory, setDisplayHistory] = useState('');
  const [visible, setVisible] = useState(true);

  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');
  const [output, setOutput] = useState('0');
  const [operator, setOperator] = useState('');
  const [sign, setSign] = useState('');

  const [total, setTotal] = useState(false);

  useEffect(() => {
    if (sign === 'CE' || sign === '←') {
      setOutput(current || '0');
    } else {
      setOutput(current || previous || '0');
    }
  }, [current, previous, sign]);

  useEffect(() => {
    if (displayHistory.includes(')')) {
      const result = calculatingBrackets(displayHistory);
      if (result) {
        setPrevious(result.toString());
      }
    }
    if (total) {
      if (displayHistory) {
        dispatch(setHistory({ id: historyList.length, value: displayHistory }));
      }
      localStorage.setItem('history', JSON.stringify(historyList));

      setDisplayHistory('');
    }
  }, [displayHistory, total]);

  const numberClickHandler = (value: string) => {
    if (current.includes('.') && value === '.') return;

    if (total) {
      setPrevious('');
    }

    setCurrent((state) => state + value);
    setSign('');
    setTotal(false);
  };

  const operatorClickHandler = (value: string) => {
    setOperator(value);

    if (current === '') return;

    if (previous !== '' && !displayHistory.includes('(')) {
      const result = calculator.execute(operator, previous, current).toString();

      setPrevious(result);
      setCurrent('');
    } else {
      setPrevious(current);
      setCurrent('');
    }
  };

  const resetHandler = () => {
    setPrevious('');
    setCurrent('');
    setOperator('');
    setSign('');
    setDisplayHistory('');
  };

  const cleanEntryHandler = () => {
    setSign('CE');
    setCurrent('');
  };

  const invertHandler = () => {
    setCurrent(String(+current * -1));
  };

  const backHandler = () => {
    setSign('<');
    setCurrent(current.slice(0, current.length - 1));
  };

  const rightBracket = () => {
    setCurrent('');
  };

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
      setTotal(value === '=');

      operatorClickHandler(value);
    }

    if (signs.includes(value)) {
      signClickHandler(value);
    }

    if (operators.includes(value) || value === '(' || value === ')') {
      const number = total ? previous : current;

      setDisplayHistory((state) => `${state} ${number} ${value === '=' ? '' : value}`);
    }
  };

  const toggleHistory = () => {
    setVisible(!visible);
  };

  return (
    <StyledCalculator>
      <div className="main-block">
        <DisplayFC output={output} displayHistory={displayHistory} />
        <KeyPadFC callback={buttonClickHandler} />
      </div>
      <HistoryFC historyList={historyList} visible={visible} />
      <ControlPanelFC visible={visible} toggleHistory={toggleHistory} />
    </StyledCalculator>
  );
}

export default CalculatorFC;
