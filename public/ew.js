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
firebase.initializeApp(firebaseConfig);
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.database();
const dbf = firebase.firestore();
var userrid;
function welcome(){
auth.onAuthStateChanged( user => {
  if (user) {
    userrid = user.uid;
    db.ref().child("users").child(user.uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        document.querySelector('.account').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'flex';
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
    document.querySelector('.account').style.display = 'flex';
    document.querySelector('.dashboard').style.display = 'none';
  }

});
}
welcome();

document.querySelector('.signup').addEventListener('click', ()=>{
  document.querySelector('.main').scrollIntoView({behavior: "smooth", block: "center"});
  side.style.display = 'none';
  openn.style.display = 'block';
})
function checkgender(){
  if(document.querySelector('#dot-1').checked){
    return 'Male'

  }
  else if(document.querySelector('#dot-2').checked){
    return 'Female'
  }
  else if(document.querySelector('#dot-3').checked){
    return 'Prefer not to say'
  }
  else{
    document.querySelector('#cross').style.display = 'block'
    setTimeout(()=>{document.querySelector('#cross').style.display = 'none'}, 1500)
    return false;
  }
}
function pimage(){
  const x = document.querySelector('#profilepic').files;
  const k = x[0].name;
  if(k){
    return true;
  }
  else{
    return false;
  }
}

document.querySelector('#submitnf').addEventListener('click', () =>{
const fullname = document.querySelector('#fullname');
const twitchusername = document.querySelector('#twitchusername');
const email = document.querySelector('#email');
const phoneno = document.querySelector('#phone');
const bday = document.querySelector('#birthday');
const paypalemail = document.querySelector('#paypalemail');
const country = document.querySelector('#country');
const address = document.querySelector('#Adress')
const eezlusername  = document.querySelector('#username');
const password = document.querySelector('#password');
const gender = document.querySelector('.gender-details');
const profileimage = document.querySelector('#profilepic').files;
  checkgender();
  document.getElementById('formbody').addEventListener('submit', function (e) {
    e.preventDefault();
  })
  if((fullname.value) && (twitchusername.value) && (email.value) && (phoneno.value) && (bday.value) && (paypalemail.value) && (country.value) && (address.value) && (password.value) && (eezlusername.value) && (pimage()) && (checkgender()) ){
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(response) {
      document.querySelector('.alertp').style.display = 'block';      
      const user = firebase.auth().currentUser;
      const userId = user.uid;
      firebase.database().ref('users/' + userId).set({
        Email: email.value,
        Password: password.value,
        Twitchusername : twitchusername.value,
        Fullname: fullname.value,
        Country: country.value,
        address: address.value,
        paypal: paypalemail.value,
        birthday: bday.value,
        phonecontact: phoneno.value,
        id: userId,
        Gender: checkgender(),
        username: eezlusername.value,
        photoURL: 'boostersprofile/' + userId + '/profilePicture'
      });
      let storageRef = firebase.storage().ref('boostersprofile/' + userId + '/profilePicture');
      storageRef.put(profileimage[0]);
      document.querySelector('.alertp').style.display = 'none';
      document.querySelector('.alertd').style.display = 'block';
      document.querySelector('.alertd').scrollIntoView({behavior: "smooth", block: "center"});
   }).then(()=>{

      
      firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        dbf.collection('eworker').doc(userrid).set({
          activej:false,
        })
      })
      .catch((error) => {
        document.querySelector('.alertp').style.display = 'none';
        document.querySelector('.alertem').style.display = 'none';
        document.querySelector('.alertd').style.display = 'none';
        document.querySelector('.alerter').style.display = 'block';
        document.querySelector('.alerter').scrollIntoView({behavior: "smooth", block: "center"});
        var errorCode = error.code;
        var errorMessage = error.message;
        document.querySelector('.alerter').innerHTML = errorMessage;
        setTimeout(function() {
          document.querySelector('.alertd').style.display = 'none';
        }, 5000);
      });
   
      auth.onAuthStateChanged( user => {
        if (user) {
          firebase.auth().onAuthStateChanged(User => {
          if(User.emailVerified){ 
            document.querySelector('.otp').style.display = 'none';
          }else{
            document.querySelector('.otp').style.display = 'flex';
            document.querySelector('.form-container').style.display = 'none';
           }
        });
        } else {
          console.log('not logged in');
        }
      });

    }).then(()=>{
        document.querySelector('.alertd').style.display = 'none';
    })
    .catch((error) => {
      document.querySelector('.alertp').style.display = 'none';
      document.querySelector('.alertem').style.display = 'none';
      document.querySelector('.alertd').style.display = 'none';
      document.querySelector('.alerter').style.display = 'block';
      document.querySelector('.alerter').scrollIntoView({behavior: "smooth", block: "center"});
      var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector('.alerter').innerHTML = errorMessage;
      setTimeout(function() {
        document.querySelector('.alertd').style.display = 'none';
      }, 5000);
    })
  }
  else{
    console.log('there is something wrong');
  }
  });

  auth.onAuthStateChanged( user => {
    if (user) {
      firebase.auth().onAuthStateChanged(User => {
      if(User.emailVerified){ 
        document.querySelector('.otp').style.display = 'none';
      }else{
        document.querySelector('.otp').style.display = 'flex';
        document.querySelector('.form-container').style.display = 'none';
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