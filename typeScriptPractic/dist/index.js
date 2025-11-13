"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "Masiks";
let userAge = 30;
let isAdmin = true;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(`Is Admin: ${isAdmin}`);
console.log("-----------------------");
// any , unknown - можно назначать любые значения
// any - отключает проверку типов
// unknown - более безопасный аналог any, требует проверки типа перед использованием
let userCity = "New York";
userCity = 100;
userCity = true;
console.log(`User City: ${userCity}`);
let userCountry = "USA";
userCountry = 200;
userCountry = false;
console.log(`User Country: ${userCountry}`);
console.log("-----------------------");
// для обозначения массивов используются типы с квадратными скобками [] или generic Array<тип>
let userSkills = ["JavaScript", "TypeScript", "React"];
console.log("User Skills:");
userSkills.forEach((skill) => console.log(`- ${skill}`));
// Альтернативный синтаксис с использованием generic Array<тип>
let userScores = [85, 90, 95];
console.log("User Scores:");
userScores.forEach((score) => console.log(`- ${score}`));
// Массивы с несколькими типами данных
let mixedArray = ["Alice", 25, "Bob", 30];
console.log("Mixed Array:");
mixedArray.forEach((item) => console.log(`- ${item}`));
console.log("-----------------------");
// Кортежи - фиксированные по длине массивы с определенными типами для каждого элемента
let userTuple = ["Charlie", 28, false];
console.log("User Tuple:");
console.log(`Name: ${userTuple[0]}`);
console.log(`Age: ${userTuple[1]}`);
console.log(`Is Admin: ${userTuple[2]}`);
function displayTupleInfo(tuple) {
    console.log(`Tuple Info - Name: ${tuple[0]}, Age: ${tuple[1]}, Is Admin: ${tuple[2]}`);
}
displayTupleInfo(userTuple);
// Именнованные кортежи
const orange = [
    "Dave",
    29,
    true,
];
let userProfile;
userProfile = ["Maks", 28, false];
let anotherUserProfile = ["Anna", 32, true];
console.log("Another User Profile:");
console.log(`Name: ${anotherUserProfile[0]}`);
console.log(`Age: ${anotherUserProfile[1]}`);
console.log(`Is Admin: ${anotherUserProfile[2]}`);
console.log("-----------------------");
// Объекты - определение типов для свойств объекта
let user = {
    name: "Bob",
    age: 35,
    isActive: true,
};
//Нельзя добавить свойства, не определенные в типе объекта
// user.isAdmin = false; // Ошибка: свойство isAdmin не определено в типе объекта
console.log("User Object:");
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Is Active: ${user.isActive}`);
console.log("-----------------------");
// ---------------------------------------
// Функции - определение типов для параметров и возвращаемого значения
// ---------------------------------------
function greetUser(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
let greetingMessage = greetUser("Diana", 27);
console.log(greetingMessage);
const calculateSum = (a, b) => {
    return a + b;
};
let sum = calculateSum(10, 20);
console.log(`Sum: ${sum}`);
// Когда фунция ничего не возвращает, используется тип void
function logMessage(message) {
    console.log(`Log: ${message}`);
}
logMessage("This is a log message.");
console.log("-----------------------");
// Тип any для переменной, которая может принимать значения любого типа
let userLast;
userLast = "Smith";
console.log(`User Last Name: ${userLast}`);
userLast = 45;
console.log(`User Last Name as Number: ${userLast}`);
let someArray = ["Text", 123, true, { key: "value" }];
console.log("Some Array with any type:");
someArray.forEach((item) => console.log(`- ${item}`));
function processData(data) {
    console.log(`Processing Data: ${data}`);
}
processData("Sample Data");
processData(789);
console.log("-----------------------");
const author1 = {
    name: "John Doe",
    age: 45,
    isActive: true,
};
const newPost = {
    title: "Understanding TypeScript",
    content: "TypeScript extends JavaScript by adding types.",
    createDate: new Date(),
    author: author1,
};
console.log("New Post:");
console.log(`Title: ${newPost.title}`);
console.log(`Content: ${newPost.content}`);
console.log("-----------------------");
// Интерфейс как тип агрументов функции
function createPost(post) {
    console.log(`Creating Post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
console.log("-----------------------");
// Интерфейсы для массивов и функций
let posts = [];
posts.push(newPost);
console.log(posts);
console.log("-----------------------");
let userAdmin;
userAdmin = ["AdminUser", 101];
const backgroundColor = [255, 255, 255];
console.log(`Background Color RGB: (${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]})`);
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`Random Color RGB: (${red}, ${green}, ${blue})`);
    return [red, green, blue];
}
getRandomColor();
console.log("-----------------------");
const player1 = {
    name: "PlayerOne",
    score: 1500,
    isActive: true,
};
function printPlayerInfo(player) {
    console.log(`Player Info - Name: ${player.name}, Score: ${player.score}, Is Active: ${player.isActive}`);
}
printPlayerInfo(player1);
console.log("-----------------------");
// Union Types - переменная может принимать значения нескольких типов
let userIdentifier = null;
userIdentifier = "user_123";
console.log(`User Identifier as String: ${userIdentifier}`);
userIdentifier = null;
console.log(`User Identifier as Number: ${userIdentifier}`);
let flexibleArray = ["Alice", 30, "Bob", 25];
console.log("Flexible Array:");
flexibleArray.forEach((item) => console.log(`- ${item}`));
let orderId = "ORD1001";
console.log(`Order ID as String: ${orderId}`);
orderId = 2002;
console.log(`Order ID as Number: ${orderId}`);
console.log("-----------------------");
function changeTypeId(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const id1 = changeTypeId(12345);
const id2 = changeTypeId("555");
console.log(id1);
console.log(id2);
console.log("-----------------------");
function logDetails(userInfo) {
    if (userInfo.type === "user") {
        console.log(`This user has ID : ${userInfo.id} and name ${userInfo.userName} and email ${userInfo.email}`);
    }
    if (userInfo.type === "person") {
        console.log(`This person has ID : ${userInfo.id} and name ${userInfo.firstName} and age ${userInfo.age}`);
    }
}
let person1 = {
    type: "person",
    firstName: "John",
    age: 25,
    id: 12345,
};
let user1 = {
    type: "user",
    userName: "johndoe",
    email: "asdf@fsd.sd",
    id: "user_001",
};
logDetails(user1);
logDetails(person1);
console.log("-----------------------");
let moveDirection;
moveDirection = "up";
console.log(`Move Direction: ${moveDirection}`);
function movePlayer(direction) {
    console.log(`Player is moving ${direction}`);
}
movePlayer("left");
function sendRequest(method, url) {
    console.log(`Sending ${method} request to ${url}`);
}
sendRequest("POST", "https://api.example.com/data");
console.log("-----------------------");
const userTage = {
    id: 1,
    name: "Readonly User",
};
// -----------------------------------------------------------------
// | - оператор объединения типов (Union Types)
let value;
const personC = { name: "Alice", age: 30 };
const itemF = { id: 101, isActive: true, role: "admin" };
// -----------------------------------------------------------------
// as - оператор приведения типа
let someValue = "this is a string";
const myObj = { a: 1, b: 2, c: 3 };
// -----------------------------------------------------------------
// ! (non-null assertion) - утверждает, что значение не является null или undefined
// const buttons = document.querySelectorAll("button")!;
// const input = document.getElementById("inputField");
// input!.focus();
// -----------------------------------------------------------------
// ?? (nullish coalescing) - оператор для задания значения по умолчанию, если значение слева null или undefined
function getUserName(name) {
    console.log(name ?? "Default User");
}
// -----------------------------------------------------------------
// ??= (nullish coalescing assignment) - оператор для присвоения значения по умолчанию, если переменная слева null или undefined
let userNickname = null;
userNickname ??= "Guest";
console.log(`User Nickname: ${userNickname}`);
let anotherNickname = "SuperUser";
anotherNickname ??= "Guest";
console.log(`Another Nickname: ${anotherNickname}`);
// -----------------------------------------------------------------
console.log("-----------------------");
const point1 = { x: 10, y: 20 };
console.log(`Point Coordinates: (${point1.x}, ${point1.y})`);
const point2 = { x: 30, y: 40 };
console.log(`Readonly Point Coordinates: (${point2.x}, ${point2.y})`);
// point2.y = 45; // Ошибка: нельзя изменить свойство y, так как оно readonly
const roles = ["admin", "user", "guest"];
// roles.push("superadmin"); // Ошибка: нельзя изменить массив roles, так как он readonly
const userRoles = [{ id: 1, role: "admin" }];
//  userRoles.push({id: 2, role: "user"}); // Ошибка: нельзя изменить массив userRoles, так как он readonly
userRoles[0].role = "superAdmin"; // Можно изменять свойства объектов внутри массива, но нельзя изменять сам массив
console.log(userRoles);
console.log("-----------------------");
function greet(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}.`);
    }
}
greet("Alice", 30);
greet("Bob");
console.log("-----------------------");
// Перечисления (Enums) - способ определения набора именованных констант
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (UserRole = {}));
let currentUserRole = UserRole.ADMIN;
console.log(`Current User Role: ${currentUserRole}`);
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusCode || (HttpStatusCode = {}));
async function fetchData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    if (response.status === HttpStatusCode.OK) {
        const data = await response.json();
        console.log("Data fetched successfully.");
    }
    else if (response.status === HttpStatusCode.NotFound) {
        console.error("User not found.");
    }
    else if (response.status === HttpStatusCode.InternalServerError) {
        console.error("Server error occurred.");
    }
    else {
        console.error("Unhandled status code:", response.status);
    }
}
console.log("-----------------------");
// Generic Types - создание универсальных функций и типов
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItems(index) {
        return this.contents[index];
    }
}
const userStorage = new StorageContainer();
userStorage.addItem("Item 1");
userStorage.addItem("Item 2");
console.log(`First Item: ${userStorage.getItems(0)}`);
console.log(`Second Item: ${userStorage.getItems(1)}`);
console.log(`Third Item: ${userStorage.getItems(2)}`); // undefined
const numberStorage = new StorageContainer();
numberStorage.addItem(100);
numberStorage.addItem(200);
console.log(`First Number: ${numberStorage.getItems(0)}`);
console.log(`Second Number: ${numberStorage.getItems(1)}`);
console.log("-----------------------");
const elevatedEmployee = {
    name: "Sarah",
    privileges: ["create-server", "delete-server"],
    startDate: new Date("2020-01-15"),
};
function printElevatedEmployeeInfo(emp) {
    console.log(`Name: ${emp.name}`);
    console.log(`Privileges: ${emp.privileges.join(", ")}`);
    console.log(`Start Date: ${emp.startDate.toDateString()}`);
}
printElevatedEmployeeInfo(elevatedEmployee);
console.log("-----------------------");
//# sourceMappingURL=index.js.map