   /* divide */ 
function divide(firstNumber,secondNumber) {
if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    return 'Error. Write numbers,please!'
}
if (secondNumber == 0 ) {
    return 'Error. Cannot divide by zero'
}
return result = firstNumber / secondNumber;
}

console.log(divide(24,4))
console.log(divide(15,0))
console.log(divide('twenty',10))


    /* substraction */
function subtraction(firstNumber,secondNumber) {
if (firstNumber < secondNumber) {
    return 'Error.You cannot subtract a smaller number from a larger number!'
}
if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    return 'Error. Write numbers,please!'
}
return result = firstNumber - secondNumber
}

console.log(subtraction(4,10))
console.log(subtraction('ten',5))
console.log(subtraction(24,4))

       /* sum */

function sum(firstNumber,secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
 return result = firstNumber + secondNumber
}

 console.log(sum(23,40))
 console.log(sum('fourty one', 41))

       /* multiply */ 
function multiply(firstNumber,secondNumber){
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
    return result = firstNumber * secondNumber
}
console.log(multiply(20,4))
console.log(multiply('four',4))





