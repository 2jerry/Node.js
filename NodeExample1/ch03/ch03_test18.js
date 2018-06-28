/* [ 프로토타입 객체 만들기 ]
 * - 프로토타입 객체는 데이터를 넣어 두려는 목적보다는 하나의 틀로 사용하기 위해 만든다.
 * 
 */
function Person(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.walk = function(speed){
	console.log(speed + 'km 속도로 걸어갑니다.');
};

var person01 = new Person('소녀시대',20);
var person02 = new Person('걸스데이',22);

console.log(person01.name + '객체의 walk(10)을 호출합니다.');
person01.walk(10);