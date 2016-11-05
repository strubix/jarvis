export default class RegisterController {
  constructor(ApiService) {
    this.ApiService = ApiService;
  }
}
RegisterController.$inject = ['ApiService'];