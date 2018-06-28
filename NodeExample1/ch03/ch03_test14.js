/* [ 배열의 일부 요소를 복사하여 새로운 배열 만들기 ]
 */

var Users = [{name:'소녀시대',age :20},{name:'걸스데이',age:22},{name:'티아라',age:23},{name:'애프터스쿨',age:25}];

console.log('배열 요소의 수 : %d',Users.length);
console.log('원본 Users');
console.dir(Users);


var Users2 = Users.slice(1,3); // index 1~3까지 복사

console.log('slice()로 잘라낸 후 User2');
console.dir(Users2);

var Users3 = Users.slice(1);

console.log('slice()로 잘라낸 후 Users3'); // index 1~ 끝까지 복사
console.dir(Users3);