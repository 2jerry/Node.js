/* [ process 객체 살펴보기 ]
 * - argv 	 : 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보
 * - env  	 : 환경변수 정보
 * - exit	 : 프로세스를 끝내는 매소드
 * - forEach : 배열 안에 들어 있는 각 아이템 값과 인덱스를 전달,
 * 			      배열 객체에 들어있는 값들을 하나씩  확인하기 좋다.
 * 
 * cmd 창
 * >> node ch02_test2.js __port 7001
 */

console.log('argv 속성의 파라미터 수 : '+process.argv.length);
console.dir(process.argv); 

if(process.argv.length > 2){
	console.log('세 번째 파라미터의 값 : %s',process[2]);
}

process.argv.forEach(function(item,index){
	console.log(index + ' : ',item);
});
