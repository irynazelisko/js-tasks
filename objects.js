/* Завдання №1 */

const singers = [
    { name: "Imagine Dragons",
      country: "USA",
    },
    { name: "The Weeknd",
      country: "Canada",
    },
    {},
    { name: "Harry Styles",
      country: "United Kingdom", 
    },
    {
     name: "Океан Ельзи",
     country: "Ukraine",
    }
  ]

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

  for(let i = 0; i < singers.length; i++) {
    const singer = singers[i];

    if(isObjectEmpty(singer)) {
        console.log(`Object at index ${i} is empty`);
    }

    console.log(`Singer: ${singer.name},Country: ${singer.country}`)
}

/* Завдання №2 */

const user = {
    name: 'Ірина',
    age: 21,
    sayHello() {
        console.log('Привіт, я '  + this.name + ', ' + 'мені ' + this.age + ' рік');
     }
};
user.sayHello(); 

/* Завдання №3 */ 

let calculator = {
    firstNumber: null,
    secondNumber: null,
    // ask function
    ask() {
        this.firstNumber = Number(prompt("Enter the first number:"));
        this.secondNumber = Number(prompt("Enter the second number:"));
    },
    // add function
    add() {
        alert('The result of add operation is: '+ (this.firstNumber + this.secondNumber));
    },
    // multiply function
    mul() {
      alert('The result of mul operation: ' + this.firstNumber * this.secondNumber);
    },
    
  };
  
  calculator.ask()
  calculator.mul()
  calculator.add()





  