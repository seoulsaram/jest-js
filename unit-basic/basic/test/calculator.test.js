const Calculator = require('../../calculator.js');

//describe는 관련된 테스트들을 묶을 수 있는 함수다.
//중요한 점 하나는, describe 안에 있는 각각의 it은 독립적으로 수행되도록 하는 것이 중요하다.
//때문에 class오브젝트를 it안에서 매번 생성해주는 방법을 사용했었지만, 이렇게 하면 코드중복이 심해진다!
//beforeEach 함수를 통해, 각각의 독립된 테스트가 실행되기 전, 어떤 작업이 먼저 실행되도록 만들 수 있다.

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(9);
    cal.add(12);
    expect(cal.value).toBe(21);
  });

  /* 에러를 예상하는 코드 작성해보자 */
  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('multiplies', () => {
    cal.set(2);
    cal.multiply(3);
    expect(cal.value).toBe(6);
  });
  it('subtracts', () => {
    cal.set(2);
    cal.subtract(2);
    expect(cal.value).toBe(0);
  });

  describe('divides', () => {
    it('0 / 0 == NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 == Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 == 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
