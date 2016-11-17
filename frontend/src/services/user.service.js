import ApiService from './api.service';

export default class UserService extends ApiService {
  constructor($http) {
    super($http);
  }

  register(credentials) {
    return this.$http.get(`${this.url}register?username=${credentials.username}&password=${credentials.password}&email=${credentials.email}`);
  }

  login(credentials) {
    return this.$http.get(`${this.url}login?username=${credentials.username}&password=${credentials.password}`);
  }
}

UserService.$inject = ['$http'];