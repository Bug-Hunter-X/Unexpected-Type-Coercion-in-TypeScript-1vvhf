# Unexpected Type Coercion in TypeScript

This example demonstrates how TypeScript's type system can allow type coercion, potentially leading to unexpected behavior if not handled carefully.

The `add` and `subtract` functions are defined to accept two numbers. However, TypeScript allows the addition of a number and a string, resulting in type coercion and the return value still being a number. This behavior might not be intuitive and could lead to runtime errors or unexpected results if not properly addressed.

The `bug.ts` file contains the code exhibiting this behavior, while `bugSolution.ts` provides a way to mitigate this issue using type guards.