let firstNumber;
let secondNumber;

firstNumber = prompt('Enter first number')
secondNumber = prompt('Enter second number')


if (firstNumber == '' || secondNumber == ''){
    alert('Поле не може бути пустим! Будь ласка введіть число!')
}

if (secondNumber == 0) {
    alert('Error. Cannot divide by zero')
}else{
    alert('Divide is' + " " + (firstNumber / secondNumber))
}


if (firstNumber > secondNumber) {
   if (confirm('Ви впевнені що хочете продовжити операцію?')){
    alert('Subtraction is' + " " + (firstNumber - secondNumber))
   } 
}

alert('Sum is ' + " " + (Number(firstNumber) + Number(secondNumber)))
alert('Multiply is' + " " + (firstNumber * secondNumber))





