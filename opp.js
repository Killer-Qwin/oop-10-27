// class User{
//     constructor(name, salari){
//         console.log(name + ` ` + salari)
//     }
// }
// new User (`max`, `2022`)

// class Employee{
//     constructor(name, salari){
//         this.name = name;
//         this.salari = salari; 
//     }
//     show(){
//         return this.name + ` - ` + this.salari + `tugrikov`
//     }
// }
// let user = new Employee(`max`, `23214`)
// console.log(user.show())   //1
// console.log(user.name)     //2 
// console.log(user.salari + `tugrikov`)    //3
// console.log(+user.salari * 0.1 + 23214)   //4

// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(name, salri, age){
//         this.#name = name
//         this.#salri = salri
//         this.#age = age
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let user = new Employee('max', `100`, `16`)
// console.log(user.show())

// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(){
//         this.#name = 'max'
//         this.#salri = `100`
//         this.#age = `16`
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let user = new Employee
// console.log(user.show())


// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(name, salri, age){
//         this.#name = name
//         this.#salri = salri
//         this.#age = age
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let max = new Employee('max', `100`, `16`)
// let nicita = new Employee('nicita', `10`, `6`)
// console.log(nicita.show())


// class Employee {
//     #name
//     #salary
// 	constructor(name, salary) {
// 		this.#name = name;
// 		this.#salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.#salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
//     show() {
//         return this.#cape(this.#name);	}
	
// 	#cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new Employee(`max`, 300)
// console.log(user.getSalary(), user.show())

// class Employee {
//     #name
//     #salary
// 	constructor(name, salary) {
// 		this.#name = name;
// 		this.#salary = salary;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSalary() {
// 		return this.#salary;
// 	}
// }
// let user = new Employee
// user.name = `max`
// user.salary = `100`
// console.log(user.getName(), user.getSalary())

// class Employee {
//     #salary
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.#salary = salary;
// 	}
	
//     getSalary() {
// 		return this.#addSign(this.#salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }
// let user = new Employee(`max`, 200)
// console.log(user.getSalary(), user.name


// class Employee{
//     #name
//     #salary
//     #age

// constructor() {
//     this.#name = `max`;
//     this.#salary = `12`;
//     this.#age = `23`
// }
//     getName(){
//         return this.#name
//     }
//     getSalary(){
//         return this.#salary
//     }
//     getAge(){
//         return this.#age
//     }
//     getAll(){
//        return this.#name + ` ` + this.#salary + ` ` + this.#age
//     }
// }
// let user = new Employee;
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());
// console.log(user.getAll())



// class Employee{
//     #name
//     #salary
//     #age
//     getName(){
//         return this.#name
//     }
//     getSalary(){
//         return this.#salary
//     }
//     getAge(){
//         return this.#age
//     }
//     setName(name){
//         this.#name = name;
//     }
//     setSalary(salary){
//         this.#salary = salary;
//     }
//     setAge(age){
//         this.#age = age;
// }
// }
// let user = new Employee;
// user.setName(`max`)
// user.setSalary(`12`)
// user.setAge(`1232`)
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());

// class Employee{
  
//     setAge(age){
//         if (age.lenght < 120){
//             this.age = age
//         } 
//     }
//     getAge(){
//         return this.age
//     }
// }
// let user = new Employee
// user.setAge(`11`)
// console.log(user.getAge())


// class Employee{ 
//     #salari 
//     setSalari(salari){
//         this.#salari = salari
//     }
//         getSalari(){
//             return this.#salari
//         }
//     }
//     let user = new Employee
//     user.setSalari(`11`)
//     console.log(user.getSalari() + `$`)
    
// class Employee  {
// 	#name;
// 	#salari;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSalari(salari) {
// 		this.#salari = salari;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSalari() {
// 		return this.#salari;
// 	}
// }
// let user = new Employee
// user.setName('max').setSalari('1000');

// console.log(user.getName());
// console.log(user.getSalari() + `$`);


// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for(let user of users){
//     if(user instanceof Employee){
//         console.log(user.name)
//     }
// }
    

// class Validator{
//     getStr(str){
//         if(typeof(str) == 'string'){
//             console.log(`vjkltw`)
//         }else{
//             console.log(`ОШИБКА`)
//         }
//     }
// }
// let stringi = new Validator  
// console.log(stringi.getStr(`efsf`))

// class isEmail{
//     getEml(eml){
//         if(eml.includes(`@yndex.ru`) || eml.includes(`@gmail.com`)){
//         console.log(`норм`)
//     }else{
//         console.log(`плохо`)
//     }
// }
// }
// let due = new isEmail
// console.log(due.getEml(`jeffhwioefj@ydex.ru`))

// class isNumber{
//         getStr(str){
//             if(typeof(str) == 'number'){
//                 console.log(`vjkltw`)
//             }else{
//                 console.log(`ОШИБКА`)
//             }
//         }
//     }
//     let stringi = new Validator  
//     console.log(stringi.getStr(1111))

// class Position{
//     constructor(position){
//         this.name = position;
//     }
// }
// class Department{
//     constructor(department){
//         this.name = department;
//     }
// }
// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }
// let position = new Position(`gey`);
// let department = new Department(`rosatom`);
// let user = new Employee(`max`, position, department);
// console.log(user.department.name);
// console.log(user.name);
// console.log(user.position.name);

// class Employee {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }

// let users = [
// 	new Employee('макс'),
// 	new Employee('ЛЕондонид'),
// 	new Employee('лёша терпила'),
//     new Employee('лёша ч м о'),
// ];
// for (let user of users) {
// 	console.log(user.getName());
// }


// class Employee {
// 	#name;
// 	#salaru
// 	constructor(name, salaru) {
// 		this.#name = name;
//         this.#salaru = salaru
// 	}
// 	getName() {
// 		return this.#name;
// 	}
//     getSalar() {
// 		return this.#salaru;
// 	}
// }

// let users = [
// 	new Employee('макс'),
// 	new Employee('ЛЕондонид'),
// 	new Employee('лёша терпила'),
//     new Employee('лёша ч м о'),
// ];
// let salaris = [
//     new Employee(`1000`),
//     new Employee(`1400`),
//     new Employee(`4000`),
//     new Employee(`400`),
// ]
// for (let user of users) {
// 	console.log(user.getName());
// }
// for (let salari of salaris) {
// 	console.log(salari.getName());
// }




// class User {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }

// class EmployeesCollection{
// 	#users

// 	constructor(){
// 		this.#users = []
// 	}

// 	ass(user) {
// 		this.#users.push(user);
// 	}
// 	show(){
// 		for (let user of this.#users){
// 			console.log(user.getName())
// 		}
// 	}
// }
// let pers = new EmployeesCollection
// pers.ass(new User(`max`))
// pers.ass(new User(`sd`))
// pers.ass(new User(`sdfq`))
// pers.ass(new User(`qfaf`))
// pers.show()

// class User{
// 	#salary

// 		constructor(salary) {
// 		this.#salary = salary;
// 	}
// 	getSal() {
// 		return this.#salary;
// 	}
// }

// class EmployeesCollection{
// 	#salarys

// constructor() {
// 	this.#salarys = [];
// }
// add(salary) {
// 	this.#salarys.push(salary);
// }
// show() {
// 	for (let salary of this.#salarys) {
// 		console.log(salary.getSal());
// 	}
// }
// sum() {
// 	let ass = 0
// 	for (let salary of this.#salarys) {
// 		console.log(ass += salary.getSal());
// 	}
// }
// }
// let pers = new EmployeesCollection
// pers.add(new User(10))
// pers.add(new User(4))
// pers.add(new User(5))
// pers.add(new User(2))
// pers.show()
// pers.sum()


// class User{
// 	#salary

// 		constructor(salary) {
// 		this.#salary = salary;
// 	}
// 	getSal() {
// 		return this.#salary;
// 	}
// }

// class EmployeesCollection{
// 	#salarys

// constructor() {
// 	this.#salarys = [];
// }
// add(salary) {
// 	this.#salarys.push(salary);
// }
// show() {
// 	for (let salary of this.#salarys) {
// 		console.log(salary.getSal());
// 	}
// }
// sum() {
// 	let ass = 0
// 	for (let salary of this.#salarys) {
// 		console.log(ass += salary.getSal() / 4);
// 	}
// }
// }
// let pers = new EmployeesCollection
// pers.add(new User(10))
// pers.add(new User(4))
// pers.add(new User(5))
// pers.add(new User(2))
// pers.show()
// pers.sum()


// let reg = new RegExp;

// console.log(reg);
// console.dir(reg);

// console.log(reg instanceof RegExp);  //true


// let arr = [1, 2, 3];

// console.log(arr);
// console.dir(arr);

// console.log(arr instanceof Array);    //true


// let arr = new Array(1, 2, 3);

// console.log(arr);
// console.dir(arr);

// console.log(arr instanceof Array);      true

// let obj = {a: 1, b: 2, c: 3};

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);    true\


// let obj = new Object;

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);    true



// let elem = document.querySelector('div');
// console.dir(elem);    //div

// let elem = document.querySelector('input');
// console.dir(elem);     //input

// let elems = document.querySelectorAll('div');
// console.dir(elems);      //NodeList || div

// let elem = document.querySelector('div');
// let elems = elem.children;
// console.dir(elems);           //p || HTMLCollection



















































//P.S кто списал тот лох(от ниситы)