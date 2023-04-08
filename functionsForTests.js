/* LESSON 24 */

/* додавання */

function sum(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
    return result = firstNumber + secondNumber
}


// /* віднімання */

function subtraction(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return 'Error.You cannot subtract a smaller number from a larger number!'
    }
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
    return result = firstNumber - secondNumber
}


// /* ділення */

function divide(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
    if (secondNumber == 0) {
        return 'Error. Cannot divide by zero'
    }
    return result = firstNumber / secondNumber;
}


// /* множення */

function multiply(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Error. Write numbers,please!'
    }
    return result = firstNumber * secondNumber
}

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
console.log(findMaxValue([2, 34, 45, 10, 3, 59, 5, 44, 11, 333, 4576, 29]))

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
console.log(findMinValue([-1, 34, 54, 55, 21, 43, 98, -18, 4, 1, 2]))

/* LESSON 26 */

/* Accumulator */

function Accumulator(initialValue) {
    this.value = initialValue;
}

Accumulator.prototype.increment = function () {
    this.value++;
    console.log(`${this.value}`)
}


Accumulator.prototype.decrement = function () {
    this.value--;
    console.log(`${this.value}`)
}


const acc = new Accumulator(24);
acc.increment();
acc.decrement();

/* Cancelable Accumulator */

function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function () {
    this.value = this.startingValue;
};

/* LESSON 28 */
/* toggle  image */

function toggleImageSize() {
    const image = document.getElementById("image");
    image.classList.toggle("image-enlarged");
    image.style.transform = image.classList.contains("image-enlarged") ? "scale(1.2)" : "scale(1)";
}

/* scroll to sections */

function scrollToSection(event) {
    if (event.key === "a") {
        return "sectionA";
    } else if (event.key === "b") {
        return "sectionB";
    } else if (event.key === "c") {
        return "sectionC";
    } else if (event.key === "d") {
        return "sectionD";
    }
}

