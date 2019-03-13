var config = {
  apiKey: 'AIzaSyCn88GgwjAxRUnAG1r8pmYqn6M6i0V4xdU',
  authDomain: 'tw-follow-me.firebaseapp.com',
  databaseURL: 'https://tw-follow-me.firebaseio.com',
  projectId: 'tw-follow-me'
}
firebase.initializeApp(config)

var db = firebase.database().ref('peepme')
