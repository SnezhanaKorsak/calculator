import React, { useEffect, useState } from 'react';

import DisplayFC from 'components/display/DisplayFC';
import KeyPadFC from 'components/keyPad/KeyPadFC';
import ControlPanelFC from 'components/controlPanel/ControlPanelFC';
import HistoryFC from 'components/history/HistoryFC';

import { setHistory } from 'reducers/historyReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { calculating, checkOperatorDuplicate } from 'utils/calculating';
import { digits, operators, signs } from 'constants/buttons';

import { SignClickHandler } from 'containers/calculator/types';

import { StyledCalculator } from 'containers/calculator/styled';

const CalculatorFC = () => {
  const dispatch = useAppDispatch();
  const historyList = useAppSelector((state) => state.history.historyList);

  const [visible, setVisible] = useState(true);
  const [output, setOutput] = useState('0');

  const [expression, setExpression] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (expression) {
      const currentResult = calculating(expression);
      setResult(currentResult || currentValue);
    }
  }, [expression]);

  useEffect(() => {
    setOutput(currentValue || result || '0');
  }, [currentValue, result]);

  useEffect(() => {
    if (isFinish) {
      if (expression) {
        dispatch(setHistory({ id: historyList.length, value: expression }));
      }
      localStorage.setItem('history', JSON.stringify(historyList));
      setExpression('');
    }
  }, [isFinish, expression]);

  const resetHandler = () => {
    setCurrentValue('');
    setOperator('');
    setExpression('');
    setResult('');
    setIsFinish(false);
  };

  const cleanEntryHandler = () => {
    setCurrentValue('');
    setResult('');
  };

  const backHandler = () => setCurrentValue(currentValue.slice(0, currentValue.length - 1));

  const invertHandler = () => setCurrentValue(String(+currentValue * -1));

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
      setCurrentValue((state) => state + btnValue);
      setOperator('');
    }

    if (operators.includes(value)) {
      let newExpression = value === '=' ? currentValue : currentValue + btnValue;
      if (isFinish) {
        newExpression = result + btnValue;
      }
      setExpression((state) => checkedExpression || state + newExpression);
      setCurrentValue('');
      setOperator(value);
    }
    if (value !== '=') {
      setIsFinish(false);
    } else {
      setIsFinish(true);
      setOperator('');
    }
  };

  const toggleHistory = () => {
    setVisible(!visible);
  };

  return (
    <StyledCalculator>
      <div className="main-block">
        <DisplayFC output={output} displayHistory={expression} />
        <KeyPadFC onButtonClick={buttonClickHandler} />
      </div>
      <HistoryFC historyList={historyList} visible={visible} />
      <ControlPanelFC visible={visible} toggleHistory={toggleHistory} />
    </StyledCalculator>
  );
};

export default CalculatorFC;
