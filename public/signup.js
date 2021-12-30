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
  const db = firebase.database();
  const dbf = firebase.firestore();

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
var userId;
document.querySelector('#signupBtn').addEventListener('click', () =>{
document.getElementById('signUpform').addEventListener('submit', function (e) {
  e.preventDefault();
})
  const Email = document.getElementById('Email').value;
  const Password = document.getElementById('Password').value;
  const Firstname = document.getElementById('FirstName').value;
  const Lastname = document.getElementById('LastName').value;
  const Country = document.getElementById('Country').value;
  const State = document.getElementById('State').value;
  const Gender = document.getElementById('Gender').value;
  const dob = document.getElementById('Dob').value;
  const username = document.getElementById('username').value;
  firebase.auth().createUserWithEmailAndPassword(Email, Password)
  .then(function() {
    //Shows thap the process has started
    document.querySelector('.alertp').style.display = 'block';
    document.querySelector('.alertp').scrollIntoView();
    
    
    const user = firebase.auth().currentUser;
    userId = user.uid;
    firebase.database().ref('users/' + userId).set({
      Email: Email,
      Password: Password,
      Firstname: Firstname,
      Lastname: Lastname,
      Country: Country,
      State: State,
      dob: dob,
      id: userId,
      Gender: Gender,
      username: username,
      photoURL: userId + 'profilePicture'
    })
  }).then(()=>{

  })
  .then(()=>{const file = document.querySelector('#profilepic').files;
      let storageRef = firebase.storage().ref(userId + 'profilePicture');
      storageRef.put(file[0]) })
      .then(()=>{
        document.querySelector('.alertp').style.display = 'none';
        document.querySelector('.alertd').style.display = 'block';
        document.querySelector('.alertd').scrollIntoView()
        setTimeout(function() {
          document.querySelector('.alertd').style.display = 'none';
        }, 5000);
  
    auth.onAuthStateChanged( user => {
      if (user) {
        firebase.auth().onAuthStateChanged(User => {
        if(User.emailVerified){ 
          document.querySelector('.otp').style.display = 'none';

        }else{
          document.querySelector('.otp').style.display = 'flex';
         }
      });
      } else {
        console.log('not logged in');
      }
    });
  })
  .catch((error) => {
    document.querySelector('.alertp').style.display = 'none';
    document.querySelector('.alertem').style.display = 'none';
    document.querySelector('.alertd').style.display = 'none';
    document.querySelector('.alerter').style.display = 'block';
    var errorMessage = error.message;
    document.querySelector('.alerter').innerHTML = errorMessage;
    document.querySelector('alerter').scrollIntoView();
    setTimeout(function() {
      document.querySelector('.alertr').style.display = 'none';
    }, 10000);
  })
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
   
});
}
