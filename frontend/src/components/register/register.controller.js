import validator from 'validator';

export default class RegisterController {
  constructor(UserService) {
    this.UserService = UserService;
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
          console.log(response);
        })
        .catch((response) => {
          console.error('Error', response.status, response.data);
        });
  }
}
RegisterController.$inject = ['UserService'];