/*пошук суми елементів масиву*/ 
let numbers = [2,34,45,10,3,99,5,44,11,29];
let sumOfArray = 0;

for(let i = 0; i < numbers.length; i++){
    if (typeof i === 'number') {
        sumOfArray += numbers[i]
}
}
console.log(`Sum of array is ${sumOfArray}`)

/* максимальне значення */ 
let max = numbers[0];
for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] > max && typeof i === 'number') {
    max = numbers[i];
  }
}
console.log(`Minimum value is ${max}`)

/* мінімальне значення */

let min = numbers[0];
for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] < min && typeof i === 'number') {
    min = numbers[i];
  }
}
console.log(`Minimum value is ${min}`)

/* пʼять # */ 
let str = " ";
let symbol = "#";
for (let i = 0; i < 5; i++) {
  str += symbol;
  console.log(str);
}