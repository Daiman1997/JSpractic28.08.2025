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
  console.log(`Tuple Info - Name: ${tuple[0]}, Age: ${tuple[1]}, Is Admin: ${tuple[2]}`);
}
displayTupleInfo(userTuple);

// Именнованные кортежи
const orange: [name: string, age: number, isAdmin: boolean] = ["Dave", 29, true];
let userProfile: [name: string, age: number, isAdmin: boolean];
userProfile = ['Maks', 28, false];

// Именнованные кортежи с помощью type alias
type UserInfo = [name: string, age: number, isAdmin: boolean];
let anotherUserProfile: UserInfo = ['Anna', 32, true];
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
}
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
let posts: Post[] = []
posts.push(newPost);
console.log(posts);

console.log("-----------------------");

//Type Aliases - создание пользовательских типов

type ID = [name: string, id: number];
let userAdmin: ID;
userAdmin = ['AdminUser', 101];

type colorRGB = [red: number, green: number, blue: number];
const backgroundColor: colorRGB = [255, 255, 255];
console.log(`Background Color RGB: (${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]})`);

function getRandomColor(): colorRGB {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`Random Color RGB: (${red}, ${green}, ${blue})`);
    return [red, green, blue];
}

getRandomColor();

console.log("-----------------------");
// Перечисления (Enums) - способ определения набора именованных констант
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}
let currentUserRole: UserRole = UserRole.ADMIN;
console.log(`Current User Role: ${currentUserRole}`);
