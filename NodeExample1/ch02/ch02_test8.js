/* [ 파일 패스를 다루는 path 모듈]
 * - join : 여러개의 이름들을 모두 합쳐 하나의 패스로 만들어준다.
 * - dirname : 디렉터리 이름 반환
 * - basename : 확장자 제외한 이름 반환
 * - extname : 파일의 확장자 반환
 */

var path = require('path');

// 디렉터리 이름 합치기
var directories = ["users","leejay","docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s',docsDirectory);

// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/leejay','notepad.exe');
console.log('파일 패스 : %s',curPath);

// 패스에서 디렉터리, 파일 이름, 확장자 구별하기
var filename = "C:\\Users\\leejay\\notepad.exe";
var dirname = path.dirname(filename);   // 경로
var basename = path.basename(filename); // 이름
var extname = path.extname(filename);   // 파일 확장자 

console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s',dirname,basename,extname);