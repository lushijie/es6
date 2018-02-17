/*
* @Author: lushijie
* @Date:   2017-11-14 09:46:42
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-17 18:44:53
*/
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型
// 前六种：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

console.log(Symbol());
console.log(typeof Symbol())
console.log(Symbol('save-video') === Symbol('save-video')); // false

let name = Symbol('a');
console.log(name);

// Symbol 值作为对象属性名时，不能用点运算符
let obj = {
  [name]: 'a123456'
}
console.log(obj[name]);

console.log(Boolean(Symbol()))
// Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。