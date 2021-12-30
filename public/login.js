const firebaseConfig = {
  apiKey: "AIzaSyA4AI_Tg675277QPU9MhZQGPqf-3H4ni2o",
  authDomain: "eezl-2d5a5.firebaseapp.com",
  databaseURL: "https://eezl-2d5a5-default-rtdb.firebaseio.com",
  projectId: "eezl-2d5a5",
  storageBucket: "eezl-2d5a5.appspot.com",
  messagingSenderId: "1019518275328",
  appId: "1:1019518275328:web:aee5bfc1b70badced6ade5",
  measurementId: "G-MS5RSHEGHN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = firebase.app();
const auth = firebase.auth();

auth.onAuthStateChanged( user => {
  if (user) {
    console.log(user);
    document.querySelector('.account').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'flex';
  } else {
    console.log('not logged in');
    document.querySelector('.account').style.display = 'flex';
    document.querySelector('.dashboard').style.display = 'none';
  }

});
const side = document.querySelector('.side');
const openn = document.querySelector('.open');
const closen = document.querySelector('.close');
function opennav(){
  side.style.display = 'flex';
  openn.style.display = 'none';
  side.style.transition = '0.3s all ease';

}
function closenav(){
  side.style.display = 'none';
  openn.style.display = 'block';
  
}

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
  document.querySelector('.alert1').style.display = 'block';
  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log("sucess");
    // close the signup modal & reset form
    // 

  })
  .catch((error) => {
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    document.querySelector('.alert4').style.display = 'block';
    document.querySelector('.alert4').innerHTML = errorMessage;
    setTimeout(() =>{
      document.querySelector('.alert4').style.display = 'none';
    }, 20000);
    if(errorCode){
      document.querySelector('.alert1').style.display = 'none';
    }

  });

});
  
auth.onAuthStateChanged( user => {
  if (user) {
    firebase.auth().onAuthStateChanged(User => {
    if(User.emailVerified){ 
      document.querySelector('.otp').style.display = 'none';
      window.location.replace("Account.html");
    }else{
      document.querySelector('.otp').style.display = 'flex';
     }
  });
  } else {
    console.log('not logged in');
  }

});
function emailA() {
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
     
  })
};


function logOut() {
  auth.signOut().then(() => {
    if (user) {
      console.log('user signed out');
      window.location.replace("login.html");
      
    } else {
      console.log('user currently logged in');
      
    }
  })
};

