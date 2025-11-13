let userName: string = "Masiks";
let userAge: number = 30;
let isAdmin: boolean = true;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(`Is Admin: ${isAdmin}`);
console.log("-----------------------");

// any , unknown - можно назначать любые значения
// any - отключает проверку типов
// unknown - более безопасный аналог any, требует проверки типа перед использованием
let userCity: any = "New York";
userCity = 100;
userCity = true;
console.log(`User City: ${userCity}`);

let userCountry: unknown = "USA";
userCountry = 200;
userCountry = false;
console.log(`User Country: ${userCountry}`);
console.log("-----------------------");

// для обозначения массивов используются типы с квадратными скобками [] или generic Array<тип>
let userSkills: string[] = ["JavaScript", "TypeScript", "React"];
console.log("User Skills:");
userSkills.forEach((skill) => console.log(`- ${skill}`));

// Альтернативный синтаксис с использованием generic Array<тип>
let userScores: Array<number> = [85, 90, 95];
console.log("User Scores:");
userScores.forEach((score) => console.log(`- ${score}`));

// Массивы с несколькими типами данных
let mixedArray: (string | number)[] = ["Alice", 25, "Bob", 30];
console.log("Mixed Array:");
mixedArray.forEach((item) => console.log(`- ${item}`));
console.log("-----------------------");

// Кортежи - фиксированные по длине массивы с определенными типами для каждого элемента
let userTuple: [string, number, boolean] = ["Charlie", 28, false];
console.log("User Tuple:");
console.log(`Name: ${userTuple[0]}`);
console.log(`Age: ${userTuple[1]}`);
console.log(`Is Admin: ${userTuple[2]}`);

function displayTupleInfo(tuple: [string, number, boolean]): void {
  console.log(
    `Tuple Info - Name: ${tuple[0]}, Age: ${tuple[1]}, Is Admin: ${tuple[2]}`
  );
}
displayTupleInfo(userTuple);

// Именнованные кортежи
const orange: [name: string, age: number, isAdmin: boolean] = [
  "Dave",
  29,
  true,
];
let userProfile: [name: string, age: number, isAdmin: boolean];
userProfile = ["Maks", 28, false];

// Именнованные кортежи с помощью type alias
type UserInfo = [name: string, age: number, isAdmin: boolean];
let anotherUserProfile: UserInfo = ["Anna", 32, true];
console.log("Another User Profile:");
console.log(`Name: ${anotherUserProfile[0]}`);
console.log(`Age: ${anotherUserProfile[1]}`);
console.log(`Is Admin: ${anotherUserProfile[2]}`);

console.log("-----------------------");

// Объекты - определение типов для свойств объекта
let user: { name: string; age: number; isActive: boolean } = {
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
function greetUser(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
let greetingMessage: string = greetUser("Diana", 27);
console.log(greetingMessage);

const calculateSum = (a: number, b: number): number => {
  return a + b;
};
let sum: number = calculateSum(10, 20);
console.log(`Sum: ${sum}`);
// Когда фунция ничего не возвращает, используется тип void
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}
logMessage("This is a log message.");
console.log("-----------------------");

// Тип any для переменной, которая может принимать значения любого типа
let userLast: any;
userLast = "Smith";
console.log(`User Last Name: ${userLast}`);
userLast = 45;
console.log(`User Last Name as Number: ${userLast}`);

let someArray: any[] = ["Text", 123, true, { key: "value" }];
console.log("Some Array with any type:");
someArray.forEach((item) => console.log(`- ${item}`));

function processData(data: any): any {
  console.log(`Processing Data: ${data}`);
}
processData("Sample Data");
processData(789);

console.log("-----------------------");

// Интерфейсы (Interfaces) - определение структуры объектов
interface Author {
  name: string;
  age: number;
  isActive: boolean;
}

const author1: Author = {
  name: "John Doe",
  age: 45,
  isActive: true,
};

interface Post {
  title: string;
  content: string;
  tags?: string[]; // необязательное свойство
  createDate: Date;
  author: Author; // вложенный интерфейс
}

const newPost: Post = {
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

function createPost(post: Post): void {
  console.log(`Creating Post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);

console.log("-----------------------");

// Интерфейсы для массивов и функций
let posts: Post[] = [];
posts.push(newPost);
console.log(posts);

console.log("-----------------------");

//Type Aliases - создание пользовательских типов

type ID = [name: string, id: number];
let userAdmin: ID;
userAdmin = ["AdminUser", 101];

type colorRGB = [red: number, green: number, blue: number];
const backgroundColor: colorRGB = [255, 255, 255];
console.log(
  `Background Color RGB: (${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]})`
);

function getRandomColor(): colorRGB {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  console.log(`Random Color RGB: (${red}, ${green}, ${blue})`);
  return [red, green, blue];
}

getRandomColor();

console.log("-----------------------");

// Пример с object

type Player = {
  name: string;
  score: number;
  isActive: boolean;
};

const player1: Player = {
  name: "PlayerOne",
  score: 1500,
  isActive: true,
};

function printPlayerInfo(player: Player): void {
  console.log(
    `Player Info - Name: ${player.name}, Score: ${player.score}, Is Active: ${player.isActive}`
  );
}
printPlayerInfo(player1);

console.log("-----------------------");

// Union Types - переменная может принимать значения нескольких типов
let userIdentifier: string | null = null;
userIdentifier = "user_123";
console.log(`User Identifier as String: ${userIdentifier}`);
userIdentifier = null;
console.log(`User Identifier as Number: ${userIdentifier}`);

let flexibleArray: (string | number)[] = ["Alice", 30, "Bob", 25];
console.log("Flexible Array:");
flexibleArray.forEach((item) => console.log(`- ${item}`));

type idType = string | number;
let orderId: idType = "ORD1001";
console.log(`Order ID as String: ${orderId}`);
orderId = 2002;
console.log(`Order ID as Number: ${orderId}`);

console.log("-----------------------");

//Type Guards - проверка типа переменной в runtime

type Id = string | number;

function changeTypeId(id: Id): Id {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const id1 = changeTypeId(12345);
const id2 = changeTypeId("555");

console.log(id1);
console.log(id2);

console.log("-----------------------");

// Интерфейсы с меткой Tagged interfaces

interface User {
  type: "user";
  userName: string;
  email: string;
  id: idType;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: idType;
}

function logDetails(userInfo: User | Person): void {
  if (userInfo.type === "user") {
    console.log(
      `This user has ID : ${userInfo.id} and name ${userInfo.userName} and email ${userInfo.email}`
    );
  }

  if (userInfo.type === "person") {
    console.log(
      `This person has ID : ${userInfo.id} and name ${userInfo.firstName} and age ${userInfo.age}`
    );
  }
}

let person1: Person = {
  type: "person",
  firstName: "John",
  age: 25,
  id: 12345,
};

let user1: User = {
  type: "user",
  userName: "johndoe",
  email: "asdf@fsd.sd",
  id: "user_001",
};

logDetails(user1);

logDetails(person1);

console.log("-----------------------");

// Literal Types - переменная может принимать только определенные значения

type Direction = "up" | "down" | "left" | "right";
let moveDirection: Direction;
moveDirection = "up";
console.log(`Move Direction: ${moveDirection}`);

function movePlayer(direction: Direction): void {
  console.log(`Player is moving ${direction}`);
}

movePlayer("left");
// movePlayer('forward'); // Ошибка: значение 'forward' не входит в тип Direction

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
function sendRequest(method: HTTPMethod, url: string): void {
  console.log(`Sending ${method} request to ${url}`);
}
sendRequest("POST", "https://api.example.com/data");

console.log("-----------------------");

// Операторы в TypeScript

// readonly - делает свойства объекта доступными только для чтения
interface User322 {
  readonly id: number;
  name: string;
}
const userTage: User322 = {
  id: 1,
  name: "Readonly User",
};
// userTage.id = 2; // Ошибка: нельзя изменить свойство id, так как оно readonly
// -----------------------------------------------------------------
// ? (optional) - обозначает необязательное свойство или параметр
interface Product {
  title: number;
  description?: string; // необязательное свойство
}
// -----------------------------------------------------------------
// | - оператор объединения типов (Union Types)
let value: string | number;
// -----------------------------------------------------------------
// & - оператор пересечения типов (Intersection Types) , и extends для интерфейсов
type A = { name: string };
type B = { age: number };
type C = A & B; // тип C содержит свойства из типов A и B
const personC: C = { name: "Alice", age: 30 };

interface D {
  id: number;
}
interface E {
  isActive: boolean;
}

interface F extends D, E {
  role?: string;
}
const itemF: F = { id: 101, isActive: true, role: "admin" };
// -----------------------------------------------------------------
// as - оператор приведения типа
let someValue = "this is a string" as string;
// let input = document.querySelector("inputField") as HTMLInputElement; // Приведение типа для элемента input
// -----------------------------------------------------------------
// typeof - оператор для получения типа переменной в runtime
// -----------------------------------------------------------------
// keyof - оператор для получения ключей типа объекта
// -----------------------------------------------------------------
// instanceof - оператор для проверки принадлежности объекта к определенному классу
// -----------------------------------------------------------------
// in - оператор для перебора ключей типа объекта
type Keys = "a" | "b" | "c";
type Obj = { [K in Keys]: number };
const myObj: Obj = { a: 1, b: 2, c: 3 };
// -----------------------------------------------------------------
// ! (non-null assertion) - утверждает, что значение не является null или undefined
// const buttons = document.querySelectorAll("button")!;
// const input = document.getElementById("inputField");
// input!.focus();

// -----------------------------------------------------------------
// ?? (nullish coalescing) - оператор для задания значения по умолчанию, если значение слева null или undefined
function getUserName(name?: string) {
  console.log(name ?? "Default User");
}
// -----------------------------------------------------------------
// ??= (nullish coalescing assignment) - оператор для присвоения значения по умолчанию, если переменная слева null или undefined
let userNickname: string | null = null;
userNickname ??= "Guest";
console.log(`User Nickname: ${userNickname}`);
let anotherNickname: string | null = "SuperUser";
anotherNickname ??= "Guest";
console.log(`Another Nickname: ${anotherNickname}`);
// -----------------------------------------------------------------

console.log("-----------------------");

// Readonly подробнее
interface Point {
    readonly x: number;
    readonly y: number;
}

const point1: Point = { x: 10, y: 20 };
console.log(`Point Coordinates: (${point1.x}, ${point1.y})`);
// point1.x = 15; // Ошибка: нельзя изменить свойство x, так как оно readonly

type ReadonlyPoint = {
    readonly [K in keyof Point]: Point[K];
};
const point2: ReadonlyPoint = { x: 30, y: 40 };
console.log(`Readonly Point Coordinates: (${point2.x}, ${point2.y})`);
// point2.y = 45; // Ошибка: нельзя изменить свойство y, так как оно readonly

const roles: readonly string[] = ["admin", "user", "guest"];
// roles.push("superadmin"); // Ошибка: нельзя изменить массив roles, так как он readonly

const userRoles: readonly {id: number; role: string}[] = [{id: 1, role: "admin"}];
//  userRoles.push({id: 2, role: "user"}); // Ошибка: нельзя изменить массив userRoles, так как он readonly
userRoles[0]!.role = "superAdmin"; // Можно изменять свойства объектов внутри массива, но нельзя изменять сам массив
console.log(userRoles)

console.log("-----------------------");

// Оператор ? optional подробнее

type UserSite = {
    userName: string;
    email?: string; // необязательное свойство
}

function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}.`);
    }
}

greet("Alice", 30);
greet("Bob");

console.log("-----------------------");

// Перечисления (Enums) - способ определения набора именованных констант
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}
let currentUserRole: UserRole = UserRole.ADMIN;
console.log(`Current User Role: ${currentUserRole}`);

enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500,
}

async function fetchData(userId: number) {
    const response = await fetch(`/api/users/${userId}`);

    if (response.status === HttpStatusCode.OK) {
        const data = await response.json();
        console.log("Data fetched successfully.");
    } else if (response.status === HttpStatusCode.NotFound) {
        console.error("User not found.");
    } else if (response.status === HttpStatusCode.InternalServerError) {
        console.error("Server error occurred.");
    } else {
        console.error("Unhandled status code:" , response.status);
    }
}

console.log("-----------------------");

// Generic Types - создание универсальных функций и типов

class StorageContainer<T> {

    private contents: T[];

    constructor() {
        this.contents = [];        
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItems(index: number): T | undefined {
        return this.contents[index];
    }
}   

const userStorage = new StorageContainer<string>();
userStorage.addItem("Item 1");
userStorage.addItem("Item 2");
console.log(`First Item: ${userStorage.getItems(0)}`);
console.log(`Second Item: ${userStorage.getItems(1)}`);
console.log(`Third Item: ${userStorage.getItems(2)}`); // undefined

const numberStorage = new StorageContainer<number>();
numberStorage.addItem(100);
numberStorage.addItem(200);
console.log(`First Number: ${numberStorage.getItems(0)}`);
console.log(`Second Number: ${numberStorage.getItems(1)}`);

console.log("-----------------------");

// Intersection Types - объединение нескольких типов в один
type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
    name: "Sarah",
    privileges: ["create-server", "delete-server"],
    startDate: new Date("2020-01-15"),
};

function printElevatedEmployeeInfo(emp: ElevatedEmployee): void {
    console.log(`Name: ${emp.name}`);
    console.log(`Privileges: ${emp.privileges.join(", ")}`);
    console.log(`Start Date: ${emp.startDate.toDateString()}`);
}
printElevatedEmployeeInfo(elevatedEmployee);

console.log("-----------------------");
