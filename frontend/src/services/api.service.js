export default class ApiService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://127.0.0.1:8000/';
  }

  request(req, url = false, data = null) {
    return this.$http[req](this.url, url, data);
  }
}
ApiService.$inject = ['$http'];
