var firebaseConfig = {
    apiKey: 'AIzaSyBKE45Yym_HHWxDoMkDsWXPnfcI59ZWIM0',
    authDomain: 'a-pinch-of-salt-67766.firebaseapp.com',
    projectId: 'a-pinch-of-salt-67766',
    storageBucket: 'a-pinch-of-salt-67766.appspot.com',
    messagingSenderId: '730496853570',
    appId: '1:730496853570:web:94aa21bd18d49779362fdb'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userInputRef = firebase.database().ref('UserInput')

function getVal(id) {
    return document.getElementById(id).value
}

document.getElementById('form').addEventListener('submit', submitform)

function submitform(e) {
    e.preventDefault()
    var name = getVal('name')
    var wcomment = getVal('wcomment')
    saveData(name, wcomment)
}

function saveData(name, wcomment) {
    var newUserSubmission = userInputRef.push()
    var submission = {
        name: name,
        wcomment: wcomment
    }
    newUserSubmission.set(submission)
}