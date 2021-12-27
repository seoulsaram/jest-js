class ProjectClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((response) => response.json());
  }
}

module.exports = ProjectClient;
