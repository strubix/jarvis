import ApiService from './api.service';

export default class UserService extends ApiService{
  constructor($http) {
    super($http);
  }

  register(credentials){
    return this.$http.get(this.url + 'register', credentials);
  }
}
UserService.$inject = ['$http'];