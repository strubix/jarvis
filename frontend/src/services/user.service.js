import ApiService from './api.service';

export default class UserService extends ApiService {
  constructor($http) {
    super($http);
    this.user = '';
  }

  register(credentials) {
    return this.$http.post(`${this.url}register`, credentials);
  }

  login(credentials) {
    return this.$http.post(`${this.url}login`, credentials);
  }

  setUser(username) {
    this.user = username;
  }

  isLoggedIn() {
    return this.user ? this.user : false;
  }
}

UserService.$inject = ['$http'];