/*
* @Author: lushijie
* @Date:   2017-11-25 21:30:21
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-26 12:46:53
*/

// 那么__proto__是什么？
// 我们在这里简单地说下。每个对象都会在其内部初始化一个属性，就是__proto__，当我们访问一个对象的属性时，
// 如果这个对象内部不存在这个属性，那么他就会去__proto__里找这个属性，这个__proto__又会有自己的__proto__，
// 于是就这样 一直找下去，也就是我们平时所说的原型链的概念。
//
// 其实prototype只是一个假象，他在实现原型链中只是起到了一个辅助作用，
// 换句话说，他只是在new的时候有着一定的价值，而原型链的本质，其实在于__proto__！

function Person(name) {
  console.log(this);
  this.name = name;
};

Person.prototype.test = function() {
  console.log(this);
  return this.name;
}

var p = new Person('lushijie');

// new 过程
// <1> var p={}; 初始化一个对象p;
// <2> p.__proto__= Person.prototype;
// <3> Person.call(p).
console.log(p.__proto__ == Person.prototype); // true
console.log(p.test()); // lushijie






var Person = function () { };
Person.prototype.Say = function () {
  console.log("Person say");
}
Person.prototype.Salary = 50000;

var Programmer = function () { };


Programmer.prototype = new Person(); // 等效 Programmer.prototype.__proto__ = Person.prototype
// 而在上面我们指定了Programmer.prototype=new Person();
// 我们来这样拆分，
// 1. var p1=new Person();
// 2. Programmer.prototype = p1;那么:
// 3. p1.__proto__ = Person.prototype;
// 4. Programmer.prototype.__proto__ = Person.prototype;
// 由根据上面得到 p.__proto__ = Programmer.prototype
// 可以得到p.__proto__.__proto__ = Person.prototype

Programmer.prototype.WriteCode = function () {
  console.log("programmer writes code");
};

Programmer.prototype.Salary = 500;

var p = new Programmer();
p.Say(); // Person say
p.WriteCode(); // programmer writes code
console.log(p.Salary); // 500





// 通常我们认为o1、o2是对象，即普通对象；f1、f2、f3为函数。
// 但是其实函数也是对象，是由Function构造的，
// f3这种写法就跟对象的创建的写法一样。f1、f2最终也都像f3一样是有Function这个函数构造出来的
// f1、f2、f3为函数对象，Function跟Object本身也是函数对象。
var o1 = {};
var o2 =new Object();

function f1(){}
var f2 = function(){}
var f3 = new Function('str','console.log(str)');



// console.log(Object.constructor === Function); // true
console.log(Object.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype); true
console.log(Function.prototype.__proto__.__proto__) // null



function f1(){};
console.log(typeof f1) //"function"

var o1 = new f1();
console.log(typeof o1) //"object"

var o2 = {};
console.log(typeof o2) //"object"



console.log('----------');
var a1 = {};
var a2 = 123;
var a3 = new function() {};
var a4 = function() {};
var a5 = new Function('a', 'console.log(a)');
console.log(a1.__proto__ === Object.prototype); // true
console.log(a2.__proto__.__proto__ === Object.prototype); // true
console.log(a3.__proto__.__proto__ === Object.prototype); // true

console.log(a4.__proto__ === Function.prototype); // true
console.log(a4.__proto__.__proto__ === Object.prototype); //true
console.log(a5.__proto__ === Function.prototype); // true
console.log(a5.__proto__.__proto__ === Object.prototype); // true
console.log(Function.prototype.__proto__.__proto__); // null
console.log(Object.prototype.__proto__); // null
