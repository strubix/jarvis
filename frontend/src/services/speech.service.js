export default class SpeechService {
  constructor() {
    this.icons = {
      start: 'http://goo.gl/2bfneP',
      recording: 'http://goo.gl/p2jHO9',
      blocked: 'http://goo.gl/vd4AKi'
    };
    this.messages = {
      info_speak_now: 'Speak now... or <a href="#" ng-click="abort()">Cancel</a>',
      info_stop: 'Proccessing your voice...',
      info_no_speech: 'No Speech was detected. You may need to adjust your <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">microphone settings</a>.',
      info_no_mic: 'No microphone was found. Ensure that a microphone is installed.',
      info_blocked: 'Permission to use microphone is blocked. To change, go to <a href="chrome://settings/contentExceptions#media-stream">chrome://settings/contentExceptions#media-stream</a>.',
      info_denied: 'Permission to use microphone was denied.',
      info_setup: 'Click on the microphone icon to enable Web Speech.',
      info_upgrade: 'Web Speech API is not supported by this browser. Upgrade to <a href="//www.google.com/chrome" target="_blank">Chrome</a> version 25 or later.',
      info_allow: 'Click the "Allow" button above to enable your microphone.'
    };
  }

  /*
  linebreak(s) {
    s.replace(/\n\n/g, "<p></p>").replace(/\n /g, "<br>");
  }

  capitalize(s) {
    s.replace(/\S/, (m) => {
      m.toUpperCase();
    });
  }
  */

}
