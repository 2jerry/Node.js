/* [ 시스템 정보를 알려주는 os 모듈]
 */

var os = require('os');

console.log('시스템의 hostname : %s',os.hostname()); // 운영체제 호스트 네임
console.log('시스템의 메모리 : %d / %d',os.freemem(),os.totalmem()); // 사용가능한 메모리 용량, 전체 메모리 용량
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus()); // cpu 정보
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces()); // 네트워크 인터페이스 정보 배열 객체