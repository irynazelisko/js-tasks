
/* максимальне значення */ 
function findMaxValue(array) {

  let max = array[0];

for (let i = 1; i < array.length; ++i) {
  if (array[i] > max) {
    max = array[i];
  }
}
return max;

}
console.log(findMaxValue([2,34,45,10,3,99,5,44,11,333,4576,29]))


/* мінімальне значення */
function findMinValue(array) {

let min = array[0];

for (let i = 1; i < array.length; ++i) {
  if (array[i] < min) {
    min = array[i];
  }
} 

return min;

}
console.log(findMinValue([-1,34,54,55,21,23,98,-18,4,1,2]))

