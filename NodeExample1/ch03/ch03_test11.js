/* [ 배열에 값 추가 및 삭제하기 ]
 * - push(object)	: 배열의 끝에 요소를 추가한다.
 * - pop()			: 배열의 끝에 있는 요소를 삭제한다.
 * - unshift()		: 배열의 앞에 요소를 추가한다.
 * - shift() 		: 배열의 앞에 있는 요소를 삭제한다.
 * - splice(index,removeCount[,object]) : 여러 개의 객체를 요소로 추가하거나 삭제한다.
 * - slice(index,copyCount)	: 여러 개의 요소를 잘라내어 새로운 배열 객테로 만든다.
 * 
 */

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];
console.log('push() 호출 전 배열 요소의 수 : %d',Users.length);

Users.push({name:'티아라',age:23});
console.log('push() 호출 후 배열 요소의 수 : %d',Users.length);

console.log(Users.pop().name);
console.log('pop() 호출 후 열 요소의 수 : %d',Users.length);
 