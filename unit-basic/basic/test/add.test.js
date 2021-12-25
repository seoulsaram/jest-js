//test코드를 따로 분리하기 위해 test폴더를 만들었다.
//파일 네임 + .test를 붙이면 해당 파일을 테스트하겠다고 명시해주는 효과각 있다.
//test명령어 실행 시 .test가 붙은 파일만 테스트를 실행해준다.
const add = require('../add.js');

/* 테스트 코드 작성법 */
//1. test('테스트 하려는 함수 이름을 string으로 작성' ()=> {콜백함수로 함수 실행})
test('addNum', () => {
  //test code작성
  expect(add(1, 2)).toBe(3);
});
