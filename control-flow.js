//Write a function that console.logs 'Hello World'

const greetUser = () => {
  console.log("Hello World");
};
greetUser();

//Write a function that prints every number between 1 and 100

const n = 100;
const printNum = () => {
  for (let n = 1; n <= 100; n++) {
    console.log(n);
  }
};

//Write a function that takes an array of numbers as a parameter
// and adds each element of that array to a counter and
// prints the final value of the counter (i.e. the sum of all of the numbers in the array).

printNum();
const printArray = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  console.log(count);
};
printArray([1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10]);

// Write a function that loops over the following array of SEI students
// and prints out their name.

const students = [
  "Alice",
  "Andrew",
  "Casey",
  "Damian",
  "Grant",
  "Howie",
  "Wade",
  "Kat",
  "Kimbrad",
  "Kiu",
  "Natasha",
  "Obi",
  "Pedro",
  "Sarah",
  "Scott",
  "Tiffany",
  "Zhe",
];
const printName = (students) => {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
};
printName(students);

// Write a function that takes an array of strings as a parameter and
// returns an array of numbers corresponding to the lengths of each word.
// e.g. passing this function an array ['i', 'am', 'the', 'best']
// should give you back [1, 2, 3, 4] Hint: you can call .length on a string!

const lengthArr = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].length;
    result += temp + ",";
  }
  console.log(result);
};
lengthArr(["Iam", "a", "good", "person"]);

//Write a function that takes 3 parameters and returns one number,
// which is the product of the first two numbers raised to
// the power of the third. e.g. passing this function 1, 2, 3
// should give you back the answer to (1 * 2)^3

const calculator = (a, b, c) => {
  let result = 0;
  let sum = a + b;
  result = (a + b) ** c;
  console.log(result);
};
calculator(1, 2, 3);

//Write a function that prints every EVEN number between 1 and 100
const printEven = (num) => {
  for (num = 1; num <= 100; num++) {
    if (num % 2 == 0) {
      console.log(num);
    }
  }
};
printEven();

//Recreate the Fibonacci sequence between 1 and 20.
// If you don't know what that is, DuckDuckGo is your best friend!

const printFibonacci = () => {
  let a = 1;
  let b = 2;
  let nextTerm = a + b;
  console.log(a);
  while (nextTerm <= 20) {
    console.log(nextTerm);
    a = b;
    b = nextTerm;
    nextTerm = a + b;
  }
};
printFibonacci();
