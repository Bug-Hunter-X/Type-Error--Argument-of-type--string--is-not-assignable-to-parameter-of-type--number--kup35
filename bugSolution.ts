function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers');
  }
  return a + b;
}

let resultSafe = addSafe(1, 2); //Correct usage

let resultSafe2: number | undefined = undefined; 

try{
  resultSafe2 = addSafe(1, '2'); //Throws error
} catch(e){
  console.error(e);
}

console.log(result);
console.log(resultSafe);
console.log(resultSafe2); 