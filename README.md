# Type Error in TypeScript
This repository demonstrates a common type error in TypeScript where a string is passed to a function expecting a number. The TypeScript compiler will correctly identify this type mismatch and produce an error.

## Bug
The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call the function with a string as the second argument, resulting in a type error.  See `bug.ts` for the buggy code.

## Solution
The solution involves ensuring that only numbers are passed to the `add` function. This can be done through input validation or by using type guards.  See `bugSolution.ts` for a corrected version.

## Running the Code
1. Clone the repository.
2. Navigate to the repository directory.
3. Use the TypeScript compiler to compile the code (tsc bug.ts and tsc bugSolution.ts).