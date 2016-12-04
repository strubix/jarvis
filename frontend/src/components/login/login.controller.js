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

          this.UserService.setUser(credentials.username);
          alert(message);
        })
        .catch(() => {
          alert('Une erreur est survenue. Veuillez réessayer.');
        });
  }
}
LoginController.$inject = ['UserService', '$window'];