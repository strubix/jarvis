export default class LoginController {
  constructor(UserService, $window) {
    this.UserService = UserService;
    this.$window = $window;
    this.credentials = {};
  }

  confirm(credentials) {
    this.UserService.login(credentials)
        .then((response) => {
          let message = response.data.message;
          delete response.data.message;
          this.$window.sessionStorage.setItem('jarvis', JSON.stringify(response.data));
          alert(message);
        })
        .catch((response) => {
          alert(response.data.message);
        });
  }
}
LoginController.$inject = ['UserService','$window'];