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
      db.ref().child("users").child(user.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          localStorage.setItem('userid', user.uid);
          userId = user.uid
         const name = document.getElementById('name');
          const mail = document.getElementById('mail');
          const username = document.querySelector('#myusername')
         const dbRef = db.ref();
     db.ref().child("users").child(userId).get().then((snapshot) => {
       if (snapshot.exists()) {
         const data = snapshot.val();
         name.innerHTML = data.Fullname
         mail.innerHTML = data.Email;
         username.innerHTML = data.username
       } else {
         console.log("No data available");
       }
     }).catch((error) => {
       console.error(error);
     });         firebase.auth().onAuthStateChanged(User => {
         if(User.emailVerified){ 
         }else{
           window.location.replace("boosterlogin.html");
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
        window.location.replace("boosterlogin.html");
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

//   function logOut() {
//     auth.signOut().then((user) => {
//       if (user) {
//         window.location.replace("login.html");
        
//       } else {
//         window.alert('something went wrong, try again')
        
//       }
//     })
//   };
  
  
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
  
  dbf.collection('eworker').doc(userId).collection('bjobs').onSnapshot(qsnapshot =>{
      const x = qsnapshot.docChanges();
      const f = qsnapshot.size;
      if(f>0){

          x.forEach(element => {
                      if(element.type == 'added'){
              const f = element.doc.id
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
        let projectide = document.createElement('td');
        projectide.id = "projectId";
        projectide.textContent = f;
        copybtn.appendChild(buttone);
        tablerow.appendChild(datee);
        tablerow.appendChild(projectide);
        tablerow.appendChild(copybtn);
        tablebody.appendChild(tablerow);

          }
})
}
  else {
    document.querySelector('.projectLbody').style.display = 'none';
    document.querySelector('#nocontent').innerHTML = 'NO PROJECTS FOUND';
    document.querySelector('#nocontent').style.display = 'block';

  }

    numbering();
  })

  function numbering(){
    let x =document.querySelectorAll('#date-main');
    for(index =0; index<x.length; index++){
      x[index].innerHTML = index + 1;
    }
  }