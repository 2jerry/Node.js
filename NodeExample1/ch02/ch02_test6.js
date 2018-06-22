/* [ 외장 모듈 이용하여 환경 변수 설정하기 ]
 * cmd 창
 * >> npm install nconf
 * npm(Node Package)
 */

var nconf = require('nconf');
nconf.env();

console.log('JAVA_HOME 환경 변수의 값 : %s',nconf.get('JAVA_HOME'));

