/*[ 객체의 속성으로 함수 할당하기 2 ]
 * 
 */

var Person = {};
Person["age"] = 20;
Person["name"] = '소녀시대';

var add = function(a,b){
	return a+b;
};

Person["add"] = add;

console.log('더하기 : %d',Person.add(10,10));