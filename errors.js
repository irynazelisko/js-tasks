/* Приклад №1 */
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length; // тут функція нічого не повертала тому ми отримували таке повідомлення : 'avg' is declared but its value is never read.
    return avg
}

let numbers = [1, 2, 3, 4, 5];

let avg = calculateAverage(numbers);
console.log("The average is: " + avg); // має бути 3



/* Приклад №2 */

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    return `Hi. My name is ${this.name} and I'm ${this.age} years old`; // щоб отримати значення ми повинні використати ${this.name} та ${this.age}.
}

let user = new User('Sherlock', 27);
console.log(user.sayHello()); // має вивести "Hi. My name is Sherlock and I'm 27 years old" 
// якщо викликати метод без дужок він просто поверне посилання на функцію а не результат.


/* Приклад №3 */

const calculator = function(init = 0) {
	return function() {
  	return ++init;  // тут ми повинні виконати ++init замість init++, тому що init збільшується на 1 перед тим як його значення буде виведене на екран.
    // якщо залишити init++ то ми побачимо 0 адже спочатку init виводиться а потім збільшується на 1.
  }
}

const c = calculator();    // помилка була у тому що ми викликали функцію до її оголошення
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2
