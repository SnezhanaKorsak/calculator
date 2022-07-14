import { Calculator } from 'utils/Calculator';

const sign = '+-x/';

const isPriority = (prevOperator: string, nextOperator: string) => {
  if (nextOperator === '(' || nextOperator === ')') {
    return false;
  }
  return !((prevOperator === 'x' || prevOperator === '/') && (nextOperator === '+' || nextOperator === '-'));
};

export const calculatingBrackets = (expression: string) => {
  const arr = expression.split(' ');
  const values: string[] = [];
  const operators: string[] = [];
  const calculator = new Calculator();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '') {
      if (!Number.isNaN(+arr[i])) {
        values.push(arr[i]);
      } else if (arr[i] === '(') {
        operators.push(arr[i]);
      } else if (arr[i] === ')') {
        while (operators[operators.length - 1] !== '(') {
          const operator = operators.pop();
          const currentValue = values.pop();
          const previousValue = values.pop();

          if (operator && previousValue && currentValue) {
            values.push(calculator.execute(operator, previousValue, currentValue));
          }
        }
        operators.pop();
      } else if (sign.includes(arr[i])) {
        while (operators.length && isPriority(arr[i], operators[operators.length - 1])) {
          const operator = operators.pop();
          const currentValue = values.pop();
          const previousValue = values.pop();

          if (operator && previousValue && currentValue) {
            values.push(calculator.execute(operator, previousValue, currentValue));
          }
        }

        operators.push(arr[i]);
      }
    }
  }

  while (operators.length) {
    const operator = operators.pop();
    const currentValue = values.pop();
    const previousValue = values.pop();

    if (operator && previousValue && currentValue) {
      values.push(calculator.execute(operator, previousValue, currentValue));
    }
  }

  return values.pop();
};
