/*
* @Author: lushijie
* @Date:   2018-02-11 16:45:37
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 18:07:02
*/
global.a = 0;
let {a, increaseA} = require('./sub.js');
increaseA(); // increaseA： 1
increaseA(); // increaseA： 2
console.log('main:', a); // main: 1

let mod = require('./sub.js');
mod.increaseA(); // increaseA： 2
mod.increaseA(); // increaseA： 3
console.log('main:', mod.a); // main: 3

