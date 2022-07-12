import { Calculator } from 'utils/Calculator';

const sign = '+-x/';

const isPriority = (prevOperator: string, nextOperator: string) =>
  !((prevOperator === 'x' || prevOperator === '/') && (nextOperator === '+' || nextOperator === '-'));

export const calculatingBrackets = (expression: string) => {
  const start = expression.indexOf('(') + 1;
  const end = expression.indexOf(')');
  const brackets = expression.slice(start, end);

  const arr = brackets.split(' ');
  const values: string[] = [];
  const operators: string[] = [];
  const calculator = new Calculator();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '') {
      if (!Number.isNaN(+arr[i])) {
        values.push(arr[i]);
      } else if (sign.includes(arr[i])) {
        while (operators.length && isPriority(arr[i], operators[operators.length - 1])) {
          const operator = operators.pop();
          const secondValue = values.pop();
          const firstValue = values.pop();

          if (operator && firstValue && secondValue) {
            values.push(calculator.execute(operator, firstValue, secondValue));
          }
        }

        operators.push(arr[i]);
      }
    }
  }
  while (operators.length) {
    const operator = operators.pop();
    const secondValue = values.pop();
    const firstValue = values.pop();

    if (operator && firstValue && secondValue) {
      values.push(calculator.execute(operator, firstValue, secondValue));
    }
  }

  return values.pop();
};
