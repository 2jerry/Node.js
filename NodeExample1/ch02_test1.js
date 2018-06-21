/* */
var result  = 0;
console.time('duration_sum'); // 시간 측정을 위한 시작 시간 기록

for(var i = 1;i<=1000;i++){
	result +=i;
}

console.timeEnd('duration_sum'); // 시간 측정을 위한 끝 시간 기록
console.log('1 부터 1000까지 더한 결과물 : %d',result);
	
// filename, dirname => 전역 변수
console.log('현재 실행한 파일의 이름 : %s',__filename);
console.log('현재 실행한 파일의 패스 : %s',__dirname);

var Person = {name : "소녀시대",age :20};
console.dir(Person); // dir : 객체 안에 들어 있는 속성 확인