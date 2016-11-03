export default class SpeechComponentController {
  constructor(SpeechService, $rootScope) {
    this.SpeechService = SpeechService;
    this.$rootScope = $rootScope;

    this.form = {};
  }

  change() {
    console.log(this.form);
  }
}
SpeechComponentController.$inject = ['SpeechService', '$rootScope'];