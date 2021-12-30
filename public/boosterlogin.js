const firebaseConfig = {
  apiKey: "AIzaSyA4AI_Tg675277QPU9MhZQGPqf-3H4ni2o",
  authDomain: "eezl-2d5a5.firebaseapp.com",
  databaseURL: "https://eezl-2d5a5-552c2-ew.firebaseio.com/",
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
const db = firebase.database();

auth.onAuthStateChanged( user => {
  if (user) {
    db.ref().child("users").child(user.uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        firebase.auth().onAuthStateChanged(User => {
          if(User.emailVerified){ 
            document.querySelector('.otp').style.display = 'none';
            window.location.replace("bstrAccount.html");
          }else{
            document.querySelector('.otp').style.display = 'flex';
           }
        });
      }
      else{
        auth.signOut().then(() => {
          if (user) {
            console.log('user signed out');
            
          } else {
            window.alert('something went wrong, try again')
            
          }
        })
      }
    })
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
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
  document.querySelector('.alert1').style.display = 'block';
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    db.ref().child("users").child(cred.uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        auth.onAuthStateChanged( user => {
          if (user) {
            firebase.auth().onAuthStateChanged(User => {
            if(User.emailVerified){ 
              document.querySelector('.otp').style.display = 'none';
              window.location.replace("bstrAccount.html");
            }else{
              document.querySelector('.otp').style.display = 'flex';
             }
          });
          } else {
            console.log('not logged in');
          }
        
        });
        const data = snapshot.val();
      }
      else{
        document.querySelector('.alert4').style.display = 'block';
        document.querySelector('.alert4').innerHTML = `Sorry,but your data doesn't exists`;
        document.querySelector('.alert4').scrollIntoView();
        setTimeout(() =>{
          document.querySelector('.alert4').style.display = 'none';
        }, 10000);
        auth.signOut().then(() => {
          if (user) {
            console.log('user signed out');
            
          } else {
            window.alert('something went wrong, try again')
            
          }
        })
      }
    })
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
      window.location.replace("bstrAccount.html");
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
