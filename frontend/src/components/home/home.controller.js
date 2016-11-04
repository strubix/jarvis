export default class HomeController {
  constructor(ApiService) {
    this.ApiService = ApiService;

    this.ApiService.request().then((response) => {
      console.log(response);
    })
  }
}
HomeController.$inject = ['ApiService'];