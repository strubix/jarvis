export default class SpeechComponentController {
  constructor(SpeechService, $rootScope) {
    this.SpeechService = SpeechService;
    this.$rootScope = $rootScope;

    this.speech = {
      msg: this.SpeechService.messages.info_setup,
      icon: this.SpeechService.icons.start,
      recognizing: false
    }
  }

  setMsg(msg){
    this.$rootScope.$apply(() => {
      this.speech.msg = this.SpeechService.messages[msg]
    });
  }
}
SpeechComponentController.$inject = ['SpeechService', '$rootScope'];