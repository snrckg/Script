function sayHello() {
	console.log ("Helllo");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song) {
	console.log (song);
}

sing("Lalalala okokok");
sing("pam pam pam");

function multiply(a, b){
	if (a>10 || b>10){
		return "That's too hard";
	} else {
		return a*b;
	}
}

multiply(5,10);

function checkDriverAge(){
	var age =prompt("What is your age?");
}
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

var checkDriverAge2 = function(){
	var age = prompt("What is your age?");
}
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

function checkDriverAge(age){
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
// -----------------------------------------------------------------------------------------------------------

var list = [
	["tiger", "cat", "bear", "bird"]
];
console.log(list[0] [2]);


var user = {
	name: "Dima",
	age: 17,
	hobby: "Codding",
	shout: function() {
		console.log("AHHHHH");
	}
}
// -----------------------------------------------------------------------------------------------------------
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "Dima",
		password: "12345"
	},
	{
		username: "Stanok",
		password: "Vaaal"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for(var i=0; i < database.length; i++) {
		if(database [i].username === username &&
			database[i].password === password) {
				return true;
			}
	}
	return false;
}

function signIn(username,password) {	
	if (isUserValid(username, password)) {
		console.log (newsfeed);
	}
		else {
			alert("Sorry, wrong username and password");
		}
}

signIn(userNamePrompt, passwordPrompt);
// ------------------------------------------------------------------------------------------------------------

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy" 
];

var todosLength = todos.length;

for (var i=0; i < todosLength; i++) {
	todos[i] = todos[i] + "!";
	todos.pop();
}

var counterOne = 10;

while(counterOne > 0) {
	console.log(counterOne);
	counterOne--;
}

var counterTwo = 10

do{
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);
// -------------------------------------------------------------------------------------------------------------
//  condition ? expr1 : expr2;

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Acces Denied";

var automatedAnswer = 
	"You account # is " + (isUserValid(false) ? "12345" : "Not available"); 


function moveCommand(direction) {
	var WhatHappens;
	switch(direction) {
		case "forward":
			WhatHappens = "You attacked a monster";
			break;
		case "left":
			WhatHappens = "You said prrtata";
			break;
		case "right":
			WhatHappens = "Goblin going puppy";
			break;
		case "back":
			WhatHappens = "Throll eat you";
			break;
		default:
			WhatHappens = "please enter a valid direction";
	}
	return WhatHappens;
}
//---------------------------------------------------------------------------------------------------
// ES6 let + const

  const player1 = "Bobby";
  let experience1 = 100;
  let wizardLevel1 = false;

  if(experience > 90) {
  	let wizardLevel1 = true;
  }

// Destrubing или целостность

const obj = {
	player: "Bobby",
	experience:100,
	wizardLevel: false
}

const { player, experience } = obj;
let { wizardLevel } = obj;

// Свойства объекта

const name = "John snow";

const objct = {
	[name]: "hello",
	["ray" + "smith"]: "hihi"
}

const a = "Simon";
const b = true;
const c = {};

const obj2 = {a,b,c}

// Templates String

const Name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${Name} you seem to be ${age-10}. What a lovely ${pet} you have`;

// default arguments 

function greet(name="", age=30, pet="dog") {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

// Symboll

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// arrow function

function add(a, b) {
	return a + b;
}

const add2 = (a,b) => a + b;
// -----------------------------------------------------------------
// Advance function

function first() {
	var greet = "Hi";
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// функция запустила функцию,функция выполнена,больше она никогда не запуститься,но он будет помнить, что есть ссылки на эти переменные,
// поэтому дочерняя область видимости всегда есть доступ к родителю

// Curring

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5)  //ответ будет 25(т.к функция уже имеет 5 и умножает на аргумент)
// функция принимает несколько аргументов и она принимает их по разу

// Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num +1;
compose(sum, sum)(5);  //ответ будет 7(sum -конста для аргументов f g,а 5 - для аргумента а)

// все довольно просто,функция выполняет построчно применяя аргументы sum к аргументам f g чтобы выполнить сложение

// Advance arrays

// ForEach

const array = [1, 2, 4, 10];

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
}) 

console.log("forEach", double); //вроде ничего сложного,но нужно создавать отдельную переменную (типо как double) 
//чтобы там хранить полученные значения


// map

const mapArray = array.map(num => num*2);

console.log("map", mapArray);  //с map ты всегда получаешь возвращаемый элемент 
//еще с map ты можешь избегать лишнего,типо скобок,ретюрнов и прочего,если конечно у тебя всего одна конста

// Filter 

const filterArray = array.filter (num =>  num > 5);  //тут уж очевидно что делает фильтр,
//по твоим условиям делает свой отфильтрованный список

console.log("filter", filterArray);

// reduce

const reduceArray = array.reduce((acc, num) => {  //acc = accumulator
	return acc + num
}, 0)  //0 = изначальное число асс и ес чо можно любое ставить

console.log("reduce", reduceArray);  //выполняет функции array справа налево тем самым сложив все числа

// Advance object-----------------------------------------------------------------------------------
// reference type

var object1 ={value: 10};
var object2 = object1;
var object3 = {value: 10}; //думаю всё очевидно просто,мы ссылаемся на то,или иное в объекте уравнивая их 

//Context
const object4 = {
	a: function(){
		console.log(this);
	}
} //тоже самое что и Window,он дает нам понятие конкретного места,где мы находимся,ну и так же часть корневого Scope

//Instantiation

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}

class Wizard extends Player { //каждый раз используя extends для расширения,надо использовать super чтобы передавать какие либо данные
	constructor(name, type){
		super(name, type);
	}
	play() {
		console.log(`WEEEEEEEE I m a ${this.type}`)
	}
}

const Wizard1 = new Wizard("Shelly", "Healer");
const Wizard2 = new Wizard("Kostyax", "Dark Magic");

//ES7--------------------------------------------

//.includes() // - добавлено к массивам и объектам,вводится как свойство и проверяет наличие того,что в скобках
// const квадрат = x => x**2 проссто ставя две звездочки мы возводим число в ту или иную степень

//ES8--------------------------------------------

// .padStart() .padEnd() заполняет нашу строку пробелами в начале или конце,кол-во пробелов прописывается в скобках

//const fun = (a,b,c,d,) => {
	//console.log(a);
//}
//fun(1,2,3,4,) теперь мы можем оставлять запятую в конце значение и получать рабочие функции(обычно используется при длинном списке параметров)

//object.values();object.entries();object.key()  -- С помощью values можно получить значение каждого объекта, с помощью key можно использовать свойства массивов но к объектам, с помощью entries можно получить массив от каждого объекта

//ES10--------------------------------------------

//FLAT
const array0 = [1,[2,3,[4],5]];
array0.flat() //с помощью его ты можешь очищать свои массивы от слоев в них

//FlatMap

const newarray0 = array0.flatMap(creature => creature + 1); //добавляет так сказать соседа к нашим спискам

//Trim

const userEmail = "                 gaypskov@gmail"
const userEmail2 = "Pykich@gmail                  "

userEmail.trimStart()
userEmail2.trimEnd() //обрезает наши строчки,обратная функции Pad

//FromEntries

const userProfiles = [["commanderTom", 23], ["derekZlander", 40], ["ganzel", 18	]];
Object.fromEntries(userProfiles); //противоположность функции Entries,а именно,вместо массива создает нам объект

//Try catch

try{
	4 + 5
} catch {

} //нужны для проверки кода,тоесть,в try пишешь код и если есть ошибка,запускается catch

//ADVANCE LOOP------------------------------------------------------

const basket = ["apple","orange","grapes"];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
};

//1 способ
for (let i = 0; i<basket.length; i++) {
	console.log(basket[1]);
} 

//2 способ
basket.forEach(item => {
	console.log(item);
})

//вспоминаем программу так сказать

//For of 

//Iterating - те же массивы и их длинна,но просто заменена на of (применяется только к строкам и массивам)

for(item of basket) {
	console.log(item);
}
//довольно простой цикл и приятен глазу,нету сильных отличий от прошлых,только бери и на хлеб мажь 
// только одно НО,если применить это к объектам,то получишь ошибку

//For in - позволяет выполнить цикл и посмотреть свойства объекта

//enumerating - предназначено для объектов,нужно лишь для проверки и не дает вам количество и прочее,а показывает лишь свойство

for (item in detailedBasket) {
	console.log(item);
}
//простой цикл для объектов,НО,применять это можно к массивам,но ты получишь именно индекс,типо 0,1,2...

//ES2020-----------------------------------------------------------

//BigInt - новый тип подобный числам,логическим выражениям,строкам и прочему
//он нужен для того,чтобы производить вычисления особо крупных выражений,добавляя в конце n (123012301203n - 20n)

//Optional chaining operator (?.)

let will_pokemon = {
	pikachu:{
		species: "Mouse Pokemon",
		height: 0.4,
		weight: 6
	}
};

let Dima_pokemon = {
	raichu:{
		species: "Mouse Pokemon",
		height: 0.8,
		weight: 30
	}
};

let weight3 = Dima_pokemon?.pikachu?.weight
console.log(weight3) //в новом операторе можно просто ставить ? и он самостоятельно проверит данные(даже ошибочные) и вместо ошибки даст undefined

// let weight = will_pokemon.pikachu.weight;
// console.log(weight);
// let weight1 = Dima_pokemon.pikachu.weight;
// console.log(weight); 
//короче,тут намеренно сделана ошибка,чтобы показать работу оператора,а работает он следующим образом
//имея множество юзеров и прочих данных,он не позволит нам из одного объекта забрать другой,т.к у самого объекта этого нет

//Nullish Coalescing operator (??)

let Dima_pokemon2 = {
	pikachu:{
		species: "Mouse Pokemon",
		height: 0.4,
		weight: 6,
		power: 0
	}
};

let power = Dima_pokemon2?.pikachu?.power ?? "no power"; 
//вместо оператора || (or) не проверяет правдивость,а проверяет,не является ли это нулевым или неопределенным

console.log(power);

//ES2021-----------------------------------------------------------
//последняя версия ES,хороший язык был(
//String(строка).replace(All) - новая фича,которая может заменять что то в строке не меняя её и при этом оригинальная строка останется собой
