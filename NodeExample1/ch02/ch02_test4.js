/* [ 노드에서 모듈 사용하기 ]
 * - export  : 전역 객체, 변수나 함수를 지정하면 속성을 메인 자바스크립트 파일에서 불러올 수 있다.
 * 			  => 속성 추가가 가능하며 여러개의 변수나 함수를 속성으로 추가 가능.
 * - require : 모듈을 불러올 대 사용하는 메소드
 * - module.export : 하나의 변수나 함수 또는 객체를 직접 할당한다.
 *  
 */

var calc = {};
calc.add = function(a,b){
	return a+b;
};

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d',calc.add(10,10));