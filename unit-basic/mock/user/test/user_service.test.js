const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');
//여기서 테스트하고 싶은 것은, 특정 상황에서 어떻게 동작하는지를 테스트 하고 싶은 것이다.
//login을 한 번 성공 했다면, 다음엔 login메소드를 실행하지 않아야 하는데
//이 부분이 잘 동작 하는지를 보고싶다.
//이런 '행동'을 테스트할 땐 stub만으로는 어려움이 있어 mock을 이용해야 한다.
describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });
  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });
});
