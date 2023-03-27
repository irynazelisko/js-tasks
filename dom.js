const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');

/* перевірка на число */
function isNumber(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return ('Помилка. Введіть,будь ласка число!');
    } else {
        return false;
    }
}
/* перевірка на пусте поле */
function isEmpty(firstNumber, secondNumber) {
    if (firstNumber == '' || secondNumber == '') {
        return ('Поле не може бути пустим! Будь ласка введіть число!');
    } else {
        return false;
    }
}

/* перевірка на пусте поле */
function sum(firstNumber, secondNumber) {
    if (isNumber(firstNumber, secondNumber)) {
        alert('Помилка. Введіть,будь ласка число!');
    } else if (isEmpty(firstNumber, secondNumber)) {
        alert('Поле не може бути пустим! Будь ласка введіть число!');
    } else {
        const result = Number(firstNumber) + Number(secondNumber);
        const objectResult = document.getElementById("sum");
        objectResult.textContent = result;
        objectResult.style.color = result < 0 ? 'red' : 'green';

        return result;
    }

}

/* віднімання */
function subtraction(firstNumber, secondNumber) {
    if (isNumber(firstNumber, secondNumber)) {
        alert('Помилка. Введіть,будь ласка число!');
    } else if (isEmpty(firstNumber, secondNumber)) {
        alert('Поле не може бути пустим! Будь ласка введіть число!');
    } else if (firstNumber < secondNumber) {
        let message = confirm('Ви впевнені що хочете продовжити операцію?');
        if (message === true) {
            const result = firstNumber - secondNumber;
            const objectResult = document.getElementById("subtraction");
            objectResult.textContent = result;
            objectResult.style.color = result < 0 ? 'red' : 'green';
            return result;
        } else {
            return ('Помилка')
        }
    } else {
        const result = firstNumber - secondNumber;
        const objectResult = document.getElementById("subtraction");
        objectResult.textContent = result;
        objectResult.style.color = result < 0 ? 'red' : 'green';
        return result;
    }

}


/* ділення */
function divide(firstNumber, secondNumber) {
    if (isNumber(firstNumber, secondNumber)) {
        alert('Помилка. Введіть,будь ласка число!');
    } else if (isEmpty(firstNumber, secondNumber)) {
        alert('Поле не може бути пустим! Будь ласка введіть число!')
    }
    if (secondNumber == 0) {
        alert('Помилка, ділити на нуль не можна!');
    } else {
        const result = firstNumber / secondNumber;
        const objectResult = document.getElementById("divide");
        objectResult.textContent = result;
        objectResult.style.color = result < 0 ? 'red' : 'green';
        return result;
    }

}

/* множення */
function multiply(firstNumber, secondNumber) {
    if (isNumber(firstNumber, secondNumber)) {
        alert('Помилка. Введіть,будь ласка число!');
    } else if (isEmpty(firstNumber, secondNumber)) {
        alert('Поле не може бути пустим! Будь ласка введіть число!');
    } else {
        const result = firstNumber * secondNumber;
        const objectResult = document.getElementById("multiply");
        objectResult.textContent = result
        objectResult.style.color = result < 0 ? 'red' : 'green';
        return result
    }

}

sum(firstNumber, secondNumber);
subtraction(firstNumber, secondNumber);
divide(firstNumber, secondNumber);
multiply(firstNumber, secondNumber);



/* градація кольорів */
function changeColor(result, objectResult) {
    let color;
    if (result < -10000) {
        color = 'rgba(139, 0, 0)';
    } else if (result < -100) {
        color = 'rgba(128, 0, 0)';
    } else if (result < 0) {
        color = `rgba(170, 51, 34)`;
    } else if (result <= 100) {
        color = `rgba(255, 0, 0)`;
    } else if (result <= 1000) {
        color = 'rgba(220, 20, 60)';
    } else {
        color = 'rgba(139, 0, 0)';
    }
    objectResult.style.color = color;
}


/* масиви */
/* максимальне значення */
function findMaxValue(array) {

    let max = array[0];

    for (let i = 1; i < array.length; ++i) {
        if (typeof array[i] === 'number' && (max === array[0] || array[i] > max)) {
            max = array[i];
        }
    }
    const result = max;
    const objectResult = document.getElementById("max");
    objectResult.textContent = result;
    changeColor(result, objectResult);
    return result;
}

findMaxValue([2, 34, 45, 10, 3, 59, 5, 44, 11, 333, 1576, 29]);

/* мінімальне значення */
function findMinValue(array) {

    let min = array[0];

    for (let i = 1; i < array.length; ++i) {
        if (typeof array[i] === 'number' && (max === array[0] || array[i] < min)) {
            min = array[i];
        }
    }

    const result = min;
    const objectResult = document.getElementById("min");
    objectResult.textContent = result;
    changeColor(result, objectResult);
    return result;

}
findMinValue([-1, 34, 54, 55, 21, 43, 98, -18, 4, 1, 2]);