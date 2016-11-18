export default class SpeechService {
  constructor($http) {
    this.$http = $http;
    this.url = 'https://api.wit.ai/message';
    this.accessToken = 'MJCZZJWSQ7D6F6ROLOPQEFN2W6NTZ2DB';
  }

  request(question) {
    //question = encodeURI(question);
    this.$http.jsonp(this.url, {
      params: {
        'access_token': 'MJCZZJWSQ7D6F6ROLOPQEFN2W6NTZ2DB',
        'q': question,
        'callback': 'JSON_CALLBACK'
      }
    }).then(function(response) {
      console.log(response);
    });
  }
}
SpeechService.$inject = ['$http'];
