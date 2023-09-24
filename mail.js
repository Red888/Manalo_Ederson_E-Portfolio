 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAga-BlLSexdiHXwP9NGF66iVoFN_XMamE",
  authDomain: "contactfeedback.firebaseapp.com",
  databaseURL: "https://contactfeedback-default-rtdb.firebaseio.com",
  projectId: "contactfeedback",
  storageBucket: "contactfeedback.appspot.com",
  messagingSenderId: "978896620884",
  appId: "1:978896620884:web:ef07d4b035681f7a398cc1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('feedbackFormContact');

document.getElementById("feedbackFormContact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var msgContent = getElementByVal('msgContent');

    console.log(msgContent);
}

const getElementByVal = (id) => {
    return document.getElementById(id).ariaValueMax;
  };
