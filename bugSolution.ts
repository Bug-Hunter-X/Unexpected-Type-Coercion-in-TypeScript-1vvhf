function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

isNumber: (arg: any): arg is number => typeof arg === 'number';

let result1 = add(5, 3); // Type is number
let result2 = subtract(5, 3); // Type is number

let result3 = add(5, "3" as any); // Type is number, but will give runtime error
let result4 = subtract(5, "3" as any); // Type is number, but will give runtime error

let result5 = isNumber(5) ? add(5, "3" as number) : 0; //Type is number, and handle type error at runtime
let result6 = isNumber(5) && isNumber("3" as any) ? subtract(5, "3" as number) : 0; //Type is number, and handle type error at runtime