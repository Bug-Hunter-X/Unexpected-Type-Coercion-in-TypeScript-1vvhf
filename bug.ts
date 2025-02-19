function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Type is number
let result2 = subtract(5, 3); // Type is number

let result3 = add(5, "3"); // Type is number
let result4 = subtract(5, "3"); // Type is number