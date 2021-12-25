const check = require('./check.js');

//test 시 jest의 mock함수 사용해보기
describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    //onSuccess와 onFail변수에 jest의 mock함수 넣기
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    //onSuccess의 mock의 calls(호출)의 length(횟수)가 한번은 되어야 한다는 뜻.
    //즉 check함수의 첫번째 인자로 true를 전달하면 onSuccess가 한 번 호출되도록 check함수를
    //작성했기 때문에 onSuccess가 1번은 호출되어야 한다는 뜻.

    //expect(onSuccess.mock.calls.length).toBe(1); 이 코드를 아래와 같이 api를 사용하여 간편하게 작성 가능.
    expect(onSuccess).toHaveBeenCalledTimes(1);

    //onSuccess의 calls의 첫번째로 호출된 함수의 첫번째 인자는 'yes'가 되어야 한다. 를 검증하는 코드.
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenLastCalledWith('yes');

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenLastCalledWith('no');
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});
