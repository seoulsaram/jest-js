class StubUserService {
  async login(id, password) {
    return new Date();
  }
}

module.exports = StubUserService;
