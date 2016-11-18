export default class SpeechComponentController {
  constructor($rootScope, SpeechService) {
    this.$rootScope = $rootScope;
    this.SpeechService = SpeechService;
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
      this.recognition.stop();
      for (var i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        this.$rootScope.$apply(() => {
          console.log(transcript);
          this.form.value = this.answer(transcript.trim());
          this.SpeechService.request(transcript.trim());
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
SpeechComponentController.$inject = ['$rootScope', 'SpeechService'];