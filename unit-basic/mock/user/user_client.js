//network로직을 따로 빼는 이유는 서비스로직 (UserService)의 단위테스트를 하기 위함.
//만약 UserService의 로직 안에 네트워크가 있다면 단위테스트를 하기 힘드니까.

class UserClient {
  login(id, password) {
    return fetch('http://example.com/login/id+passward') //
      .then((response) => response.json());
  }
}

module.exports = UserClient;
