export default class ApiService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://127.0.0.1:8000/';
  }

  request(url = false) {
    if(url){
      this.$http.get(this.url + url);
    }
    return this.$http.get(this.url);
  }
}
ApiService.$inject = ['$http'];
