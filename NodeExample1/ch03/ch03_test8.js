/* [ 배열에 추가한 사용자 객체의 수와 배열 요소에 접근한 결과 ]
 */
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});

console.log('사용자의 수 : %d',Users.length);
console.log('첫 번째 사용자 이름 : %s',Users[0].name);