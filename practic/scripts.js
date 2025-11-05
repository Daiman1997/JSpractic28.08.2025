const clearBtn = document.getElementById("buttonConsole");
clearBtn.addEventListener("click", clearConsole);
function clearConsole() {
  console.clear();
}

const button = document.getElementById("button");
button.addEventListener("click", buttonClick);

function time() {
  const now = new Date();
  document.getElementById("time").innerText =
    now.getHours() +
    ":" +
    (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
    ":" +
    (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds());
}
time();
setInterval(time, 1000);

function buttonClick() {
  /* let one;
    one = 25;
    let two = [4, 4, 4];
    console.log(two);
    
    if (one >= two) {
        console.log(true);
    } else {
        console.log(false);
    }
    
    let age = prompt('Сколько тебе лет?');
    if (age != '' && age != null) {
        alert(`Ему ${age} года`);
    } else {
        alert('Не родился еще(');
    } */
}

// Типы данных -  всего 8 типов. 7 из них примитивные, и Object не примитивен
let dataNumber = 123; //Числовой Number
//  Infinity = бесконечность ,  NaN числовая ошибка
let dataBigInt = 1234567890123456789012345678901234567890n; // BigInt
// работает с большими числами , n в конце обозначает этот тип данных
let dataString = "Апельсин"; //Строка String
// "" '' `Текст ${str}` в обратных ковычках можно встраивать переменные
let dataBoolean = true; // Булевый тип Boolean
// true false
let dataNull = null; // null
// означает пустоту , неизвестность
let dataUndefined = undefined; // undefined
// означает что переменная не назначена
// null мы присваиваем сами, а undefined присваивает движок
let dataObject = { name: "Max", age: 27 }; //Объект Object
let dataSymbol; // Символ Symbol
// используется для создания уникальных идентификаторов в объектах
//console.log(typeof dataBigInt);

//Условные операторы
let oper = 3;
if (oper == 1) {
  oper = 0;
} else {
  oper = 1;
}

//Массивы данных
let arr = [5, 25, 35, 45];
arr = [4, 233, 23, 422, 34, 53];
arr[1] = 34;
//console.log(arr.length);

//Операторы сравнения
// больше >
// меньше <
// равно ==
// не !
// не равно !=
// строгое равно ===
// меньше или равно <=
// больше или равно >=
// или || находит первый true
// и && находит первый false
// оператор нулевого сравнения ?? сравнивает null/undefined находит первый известрный
// Тернарный оператор - условие ? выражение1 : выражение2 , в место if else
// Остаток от деления %
// Возведение в степень **
let age = 24;
if (age >= 14 && age <= 90) {
}
if (!(age >= 14 && age <= 90)) {
}
if (age < 14 || age > 90) {
}

/* let user = prompt('Кто там?');
if (user == 'Админ') {
    let pass = prompt('Пароль?');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == null || pass == '') {
        alert('Отменено');
    } else {
        alert('Не верный пароль');
    };
} else if (user == '' || user == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
};
 */
let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;

//Цыклы
for (let i = 0; i < 10; ++i) {
  //console.log(i);
}

let i = 0;
while (i < 3) {
  // выводит 0, затем 1, затем 2
  //   alert( i );
  i++;
}

do {
  //   alert( i );
  i++;
} while (i < 3);

// while – Проверяет условие перед каждой итерацией.
// do..while – Проверяет условие после каждой итерации.
// for (;;) – Проверяет условие перед каждой итерацией

/* for(let i = 0; i <= 10; ++i) {
    if (i % 2 == 0) console.log(i);
} */

/*     let l;
do {
  l = prompt("<100");
  if (l == null) break; 
} while (Number(l) < 100);
 */

/* let n = 10;
stop:
for (let i = 2; i <= n  ; i++) {
    for (let j = 2; j < i ; j++) {
        if (i % j == 0) continue stop;
    }
    console.log(i);
} */

/* let a = 2 + 2;
switch (a) {
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    default: 
        console.log(0);
}
 */

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// checkAge(17)

function min(a, b) {
  return a < b ? a : b;
}

// console.log(min(3,1))

function pow(x, n) {
  x = prompt("Число?", "");
  n = prompt("Степень", "");
  return alert(x ** n);
}

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);
// console.log(menu);

// let calculator = {
//     a: 0,
//     b: 0,
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };

// calculator.read();
// // alert(calculator.a + ' ' + calculator.b);
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this
//   },
//   down() {
//     this.step--;
//     return this
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     return this
//   }
// };

// ladder.up().up().down().showStep().down().showStep();

// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.mileage = 0;
//     this.getInfo = function() {
//         return `${this.brand} ${this.model} - ${this.year} года, пробег: ${this.mileage} км.`;
//     },
//     this.drive = function(distance) {
//         this.mileage += distance;
//         console.log(`Вы проехали ${distance} км. Общий пробег: ${this.mileage} км.`);
//     }
// }

// let car1 = new Car('Nissan', 'Skyline', 1999);
// let car2 = new Car('Toyota', 'Supra', 1998);
// let car3 = new Car('Mazda', 'RX-7', 1997);
// console.log(car1.getInfo());
// car1.drive(150);
// car1.drive(200);
// console.log(car1.getInfo());
// console.log(car2.getInfo());
// console.log(car3.getInfo());

// let user = {
//   name: "Вася",
//   age: 30,
//   sayHi() {
//     return console.log("Привет!");
//   },
// };

// let id = Symbol();

// user[id] = 3;

// // alert( user[id] );

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user);

// const user = [123, 5533, 535, 534, {lang: "ru", en: "us"}];
// user.name = "Vasya";
// user.age = 30;
// console.log(user['name']);

// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   widhdraw(amount) {
//     if (amount > this.balance) {
//       return `Недостаточно средств! Текущий баланс: ${this.balance} грн.`;
//     } else {
//       this.balance -= amount;
//       return `Вы сняли ${amount} грн. Текущий баланс: ${this.balance} грн.`;
//     }
//   }
//   getBalance() {
//     return `Текущий баланс: ${this.balance} грн.S`;
//   }
//   toString() {
//     return `Счет владельца: ${this.owner}, Баланс: ${this.balance} грн.`;
//   }
// }

// const account = new BankAccount("Максим", 1000);
// account.balance = 5000
// console.log(account.widhdraw(100));
// console.log(account.getBalance());
// console.log(account.toString());

// function delay(callback, ms = 3000) {
//   setTimeout(() => callback(ms), ms);
// }

// delay((ms) => console.log(`Привет через ${ms / 1000} секунд`));

const delay = (ms = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

delay(1000)
  .then((ms) => {
    console.log(`Привет через ${ms / 1000} секунд`);
  })
  .finally(() => {
    console.log("Время вышло");
  });

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

async function asyncExample() {
  try {
    await delay(2000);
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Выполнено");
  }
}

asyncExample();

// async function showDelay() {
//   const ms = await delay(4000);
//   console.log(`Привет через ${ms / 1000} секунд`);
// }

// showDelay();
