/*
* @Author: lushijie
* @Date:   2017-06-20 15:29:53
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-26 10:05:38
*/
var userB = {
  user: 'lushijie',
  sayHello: function() {
    console.log('Hello '+ this.name);
  }
};

var bob = Object.create(userB, {
  'id' : {
    value: 'aaa',
    enumerable:true // writable:false, configurable(deletable):false by default
  },
  'name': {
    value: 'Bob',
    enumerable: true
  }
});

console.log(bob);
console.log('sayHello' in bob) // true
console.log(bob.__proto__ === userB) // true
console.log(bob.hasOwnProperty('sayHello')) // false
