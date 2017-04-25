const Stack = require('./stack');

function infixToPostfix(expression) {
    let prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    };

    expression = expression.split('');

    let operatorStack = new Stack();
    let resultStack = new Stack();

    expression.forEach(function (item) {
        if ('0123456789'.indexOf(item) !== -1) {
            resultStack.push(item);
        } else if (item === '(') {
            operatorStack.push(item);
        } else if (item === ')') {
            while (!operatorStack.isEmpty()) {
                let old = operatorStack.pop();
                if (old !== '(') {
                    resultStack.push(old);
                } else {
                    break;
                }
            }
        } else {
            while (!operatorStack.isEmpty()) {
                if (prec[operatorStack.peek()] >= prec[item]) {
                    resultStack.push(operatorStack.pop());
                } else {
                    break;
                }
            }
            operatorStack.push(item);
        }
    });

    while (!operatorStack.isEmpty()) {
        resultStack.push(operatorStack.pop());
    }

    let resultArr = [];

    while (!resultStack.isEmpty()) {
        resultArr.unshift(resultStack.pop());
    }

    return resultArr;

}

function calcPostfix(expression) {
    expression = expression.split('');

    let stack = new Stack();
    expression.forEach(function (item) {
        if ('0123456789'.indexOf(item) !== -1) {
            stack.push(Number(item));
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = 0;

            switch (item) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                // nothing to do
            }
            // console.log(result);
            stack.push(result);
        }
    });

    return stack.pop();
}

function infixToPrefix(expression) {
    let prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        ')': 1,
    };

    expression = expression.split('');
    expression.reverse();

    let operatorStack = new Stack();
    let resultStack = new Stack();

    expression.forEach(function (item) {
        if ('0123456789'.indexOf(item) !== -1) {
            resultStack.push(item);
        } else if (item === ')') {
            operatorStack.push(item);
        } else if (item === '(') {
            while (!operatorStack.isEmpty()) {
                let old = operatorStack.pop();
                if (old !== ')') {
                    resultStack.push(old);
                } else {
                    break
                }
            }
        } else {
            while (!operatorStack.isEmpty()) {
                if (prec[operatorStack.peek()] > prec[item]) {
                    resultStack.push(operatorStack.pop());
                } else {
                    break;
                }
            }
            operatorStack.push(item);
        }
    });

    while (!operatorStack.isEmpty()) {
        resultStack.push(operatorStack.pop());
    }

    let resultArr = [];

    while (!resultStack.isEmpty()) {
        resultArr.push(resultStack.pop());
    }

    return resultArr;
}

function calcPrefix(expression) {
    expression = expression.split('');
    expression.reverse();

    let stack = new Stack();

    expression.forEach(function (item) {
        if ('0123456789'.indexOf(item) !== -1) {
            stack.push(Number(item));
        } else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let result = 0;

            switch (item) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                // nothing to do
            }

            stack.push(result);
        }
    });

    return stack.pop();
}

exports.infixToPostfix = infixToPostfix;
exports.calcPostfix = calcPostfix;
exports.infixToPrefix = infixToPrefix;
exports.calcPrefix = calcPrefix;