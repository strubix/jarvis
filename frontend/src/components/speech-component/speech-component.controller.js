export default class SpeechComponentController {
  constructor(SpeechService, $rootScope) {
    this.SpeechService = SpeechService;
    this.$rootScope = $rootScope;

    this.form = {};

    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.lang = 'fr-FR';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
    } else {
      this.recognition = false;
    }

    this.recognition.onresult = (event) => {
      for (var i = event.resultIndex; i < event.results.length; i++) {
        this.recognition.stop();
        const transcript = event.results[i][0].transcript;
        this.$rootScope.$apply(() => {
          console.log(transcript);
          this.form.value = this.answer(transcript.trim());
        });
      }
    }
  }

  answer(question) {
    switch (question) {
      case "la réponse à la grande question sur la vie l'univers et le reste":
        return '42';
        break;
      default:
        return "je n'ai pas compris la question";
    }
  }

  start() {
    this.recognition.start();
  }
}
SpeechComponentController.$inject = ['SpeechService', '$rootScope'];