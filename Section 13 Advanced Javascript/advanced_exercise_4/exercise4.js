//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (num1,num2) => num1+num2;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// Answer: 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1)
// Answer: 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// Answer: 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// Answer: 16


//What are the two elements of a pure function?
deterministic: always produces the same result given the same inputs
no side effects: It does not depend on any state or data, a change during a program’s execution.It must only depend on its input elements