/*
* @Author: lushijie
* @Date:   2018-02-11 18:34:51
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 18:35:01
*/
let a = 1;
function increaseA() {
  this.a++;
  console.log('increaseA,', this.a);
}

export default {a, increaseA};
