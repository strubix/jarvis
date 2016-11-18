import validator from 'validator';

export default class RegisterController {
  constructor(UserService, $state) {
    this.UserService = UserService;
    this.$state = $state;
    this.credentials = {};
  }

  confirm(credentials) {
    if (!credentials.username || credentials.username.length < 6) {
      return alert('Votre username doit comporter au minimum 6 caractères.');
    }

    if (!credentials.email || validator.isEmail(credentials.email) == false) {
      return alert('Veuillez renseigner une adresse email valide.');
    }

    if (!credentials.password) {
      return alert('Veuillez renseigner un mot de passe.')
    }

    if (credentials.password !== credentials.confirm || !credentials.confirm) {
      return alert('La confirmation du mot de passe est incorrecte.')
    }

    delete credentials.confirm;

    this.UserService.register(credentials)
        .then((response) => {
          alert(response.data.message);
          this.$state.go('login')
        })
        .catch((response) => {
          alert(response.data.message);
        });
  }
}
RegisterController.$inject = ['UserService', '$state'];