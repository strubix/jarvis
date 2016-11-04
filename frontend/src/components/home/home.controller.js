export default class HomeController {
  constructor(ApiService) {
    this.ApiService = ApiService;

    this.ApiService.request('get').then((response) => {
      console.log(response);
    })
  }
}
HomeController.$inject = ['ApiService'];