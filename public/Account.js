var firebaseConfig = {
  apiKey: "AIzaSyA4AI_Tg675277QPU9MhZQGPqf-3H4ni2o",
  authDomain: "eezl-2d5a5.firebaseapp.com",
  projectId: "eezl-2d5a5",
  databaseURL: "https://eezl-2d5a5-552c2-ew.firebaseio.com/",
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
dbf.enablePersistence();

let mail;
let userId;
auth.onAuthStateChanged( user => {
  if (user) {
     localStorage.setItem('userid', user.uid);
     userId = user.uid
    const name = document.getElementById('name');
     const mail = document.getElementById('mail');
     const username = document.querySelector('#myusername')
    const dbRef = db.ref();
dbRef.child("users").child(userId).get().then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    name.innerHTML = data.Firstname + " " + data.Lastname;
    mail.innerHTML = data.Email;
    username.innerHTML = data.username
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});





    firebase.auth().onAuthStateChanged(User => {
    if(User.emailVerified = true){ 
    }else{
      window.location.replace("login.html");
     }
  });
  } else {
    window.location.replace("login.html");
  }

});

document.querySelector("#tablebody").addEventListener('click', (e)=>{
  if(e.target.className === 'copyId'){
    var range = document.createRange();
    let copyobj = e.target;
    range.selectNode((copyobj.parentElement.previousElementSibling));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    window.alert('Id copied');
  }
})


function closesect(){
      document.querySelector('.passwordreset').style.display = 'none';
}
function passwordreset(){
      document.querySelector('.passwordreset').style.display = 'block';
}
function sendresetpswdmain(){
  let userEmail = mail.textContent;
  firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  document.querySelector('#done').innerHTML = 'Your mail has been sent!';
  document.querySelector('#rst3').style.display = 'none';

}
function sendresetpswdmain2(){
  let userEmail = mail.textContent;
  firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {

  })
  .catch((error) => {
    document.querySelector('#done').innerHTML = 'OH NO!, An error occured!';
    document.querySelector('#done').style.color = 'red';
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  document.querySelector('#done').innerHTML = 'Your mail has been sent again!';
  document.querySelector('#rst3').style.display = 'none';

}

const id = localStorage.getItem('userid')

dbf.collection('proid').doc(id).collection('main').onSnapshot((qsnapshot) => {
  let changes = qsnapshot.docChanges();
  changes.forEach(eachele => {
    if(eachele.type == 'added'){
      document.querySelector('.projectLbody').style.display = 'flex';
      document.querySelector('#nocontent').style.display = 'none';
      const tablebody = document.getElementById('tablebody');
      let tablerow = document.createElement('tr');
      let datee = document.createElement('td') 
      datee.id = 'date-main';
      let copybtn = document.createElement('td');
      let buttone = document.createElement('button');
      buttone.className = "copyId";
      buttone.innerHTML = `<i class='bx bx-copy-alt'></i>`
      // buttone.textContent = `Copy Id`;
      let projectide = document.createElement('td');
      projectide.id = "projectId";
      projectide.textContent = eachele.doc.data().projectId;
      copybtn.appendChild(buttone);
      tablerow.appendChild(datee);
      tablerow.appendChild(projectide);
      tablerow.appendChild(copybtn);
      tablebody.appendChild(tablerow);
}
  else {
    document.querySelector('.projectLbody').style.display = 'none';
    document.querySelector('#nocontent').innerHTML = 'NO PROJECTS FOUND';
    document.querySelector('#nocontent').style.display = 'block';

  }

  })
  numbering();

});

function numbering(){
  let x =document.querySelectorAll('#date-main');
  for(index =0; index<x.length; index++){
    x[index].innerHTML = index + 1;
  }
}


