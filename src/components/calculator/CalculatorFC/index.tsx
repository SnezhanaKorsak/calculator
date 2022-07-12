import React, { useEffect, useState } from 'react';

import DisplayFC from 'components/display/DisplayFC';
import KeyPadFC from 'components/keyPad/KeyPadFC';
import ControlPanelFC from 'components/controlPanel/ControlPanelFC/ControlPanelFC';
import HistoryFC from 'components/history/HistoryFC';

import { Calculator } from 'utils/Calculator';
import { calculatingBrackets } from 'utils/calculatingBrackets';

import { StyledCalculator } from 'components/calculator/components';

const calculator = new Calculator();

const digits = '0123456789.';
const operators = '+-x/%=';
const signs = ['C', 'CE', '±', '←', '(', ')'];

function CalculatorFC() {
  const [displayHistory, setDisplayHistory] = useState('');

  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');
  const [output, setOutput] = useState('0');
  const [operator, setOperator] = useState('');
  const [sign, setSign] = useState('');
  const [storage, setStorage] = useState({ previous: '', operator: '' });

  const [total, setTotal] = useState(false);

  useEffect(() => {
    if (sign === 'CE' || sign === '←') {
      setOutput(current || '0');
    } else {
      setOutput(current || previous || '0');
    }

    if (total) {
      setDisplayHistory('');
    }
  }, [current, previous, sign, total]);

  useEffect(() => {
    if (displayHistory.includes(')')) {
      const result = calculatingBrackets(displayHistory);
      if (result) {
        setPrevious(calculator.execute(storage.operator, storage.previous, result).toString());
      }
    }
  }, [displayHistory]);

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
    setOperator((state) => (state !== value ? value : state));

    if (current === '') return;

    if (previous !== '') {
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

  const leftBracket = () => {
    setStorage({ previous, operator });
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

      case '(':
        return leftBracket();

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
      setTotal(value === '=');
      signClickHandler(value);
    }

    if (operators.includes(value) || value === '(' || value === ')') {
      const number = total ? previous : current;
      setDisplayHistory((state) => `${state} ${value !== '=' ? number : ''} ${value === '=' ? '' : value}`);
    }
  };
  return (
    <StyledCalculator>
      <div className="main-block">
        <DisplayFC output={output} displayHistory={displayHistory} />
        <KeyPadFC callback={buttonClickHandler} />
      </div>
      <ControlPanelFC />
      <HistoryFC />
    </StyledCalculator>
  );
}

export default CalculatorFC;
