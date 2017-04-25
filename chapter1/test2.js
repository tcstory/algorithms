const readline = require('readline');


const infixToPostfix = require("./infixExpression").infixToPostfix;
const calcPostfix = require("./infixExpression").calcPostfix;
const infixToPrefix = require("./infixExpression").infixToPrefix;
const calcPrefix = require("./infixExpression").calcPrefix;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('请输入表达式: ', (expression) => {
    let result = infixToPostfix(expression);

    console.log(`后缀表达式: ${result.join('')}`);
    console.log(`后缀表达式求值结果: ${calcPostfix(result.join(''))}`);

    result = infixToPrefix(expression);
    console.log(`前缀表达式: ${result.join("")}`);
    console.log(`前缀表达式求值结果: ${calcPrefix(result.join(""))}`);

    rl.close();
});