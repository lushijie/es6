/*
* @Author: lushijie
* @Date:   2017-11-16 11:22:52
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-16 11:50:18
*/

console.log(...[1, 2, 3]);

// [...document.querySelectorAll('div')]

console.log([...[], 1].length); // 1


// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args1 = [0, 1, 2];
f(...args1);


// 数组克隆
const a1 = [1, 2];
const a2 = a1.concat();
const a3 = [...a1];

// 合并数据
console.log([1,2, ...a1]);


// array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
let arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr1, arr2);

// ...
//  Array.from(document.querySelectorAll('p'))
//  Array.from(arguments);


// Array.of方法用于将一组值，转换为数组。
// Array.of() // []
// Array.of(undefined) // [undefined]
// Array.of(1) // [1]
// Array.of(1, 2) // [1, 2]

// // Array方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。
// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]


// copyWithin
// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
// Array.prototype.copyWithin(target, start = 0, end = this.length)

// 将3号位复制到0号位
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))


// find findIndex includes
// 数组实例的find方法，用于找出第一个符合条件的数组成员
console.log([1, 4, -5, 10].find((n) => n < 2)); // 1
// 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置
console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
})); // 2
// Array.includes(value, start = 0)
console.log([1, 2, 3].includes(2))     // true
console.log([NaN].includes(NaN)); // true
// error => console.log([NaN].findIndex(NaN)) indexOf 判断失效！

// fill Array.fill(value, start = 0, end = array.length)
// ['a', 'b', 'c'].fill(7) // [7, 7, 7]
// new Array(3).fill(7) // [7, 7, 7]


// 由于空位的处理规则非常不统一，所以建议避免出现空位。
// [1, , 2]  [1, undefined, 2]
