/* [ delete 사용하기 ]
 */


var Users = [{name:'소녀시대',age :20},{name:'걸스데이',age:22},{name:'티아라',age:23}];
console.log('delete 호출 전 배열 요소의 수 : %d',Users.length);
console.dir(Users);

delete Users[1];

console.log('\ndelete 호출 후 ');
console.dir(Users);