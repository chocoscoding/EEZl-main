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
  dbf.enablePersistence();
  
  let mail;
  let userId;
  var userrid;
  auth.onAuthStateChanged( user => {
    if (user) {
      userrid = user.uid;
      db.ref().child("users").child(user.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
        }
        else{
          auth.signOut().then(() => {
            if (user) {
              window.location.replace("boosterlogin.html")                
            } else {
              window.alert('something went wrong, try again')
              
            }
          })
        }
      })
    } else {
      // window.location.replace("boosterlogin.html")
      console.log('not working');
    }
  
  });
  
  
  function logOut() {
    auth.signOut().then(() => {
      if (user) {
        console.log('user signed out');
        window.location.replace("login.html");
        
      } else {
        window.alert('something went wrong, try again')
        
      }
    })
  };
  
  function copyId(e) {
    var range = document.createRange();
    let copyobj = e.target;
    console.log(copyobj.parentElement.previousElementSibling);
    range.selectNode((copyobj.parentElement.previousElementSibling));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    window.alert('Id copied');
  }
  
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
      // Password reset email sent!
      // ..
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
      // Password reset email sent!
      // ..
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
  
  
  dbf.collection('eworker').doc(userrid).collection('sellaccounts').onSnapshot((qsnapshot) =>{
  
    let changes = qsnapshot.docChanges();
    changes.forEach(change => {
      if(change.type === 'added'){
        const f = change.doc.id
        document.querySelector('.projectLbody').style.display = 'flex';
        document.querySelector('#nocontent').style.display = 'none';
        const tablebody = document.getElementById('tablebody');
        let tablerow = document.createElement('tr');
        let datee = document.createElement('td') 
        datee.id = 'date-main';
        let copybtn = document.createElement('td');
        let buttone = document.createElement('button');
        buttone.onclick = copyId;
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

  document.querySelector('#projectidinputsubmit').addEventListener('click', (e)=>{
    const a = document.querySelector('#purchaseid');
    const b = document.querySelector('#accusername');
    const c = document.querySelector('#price');
    const d = document.querySelector('#status');
    const e1 = document.querySelector('#paymentstatus');
    e.preventDefault();
    const x = document.querySelector('.projectidinput').value;
    const x2 = document.querySelector('.projectidinput');
    localStorage.setItem('purchaseid', x)
    dbf.collection('eworker').doc(userrid).collection('sellaccounts').doc(x).get().then((qsnapshot) =>{
      if(qsnapshot.exists){
        document.querySelector('.box').style.cursor = 'pointer';
        document.querySelector('.box').style.filter = `blur(0px)`;
        const l = qsnapshot.data();
        a.innerHTML = x,
        b.innerHTML = l.accountusername,
        c.innerHTML = l.price,
        d.innerHTML = l.status,
        e1.innerHTML = l.pstatus
        return l.pstatus
      }
      else{
        x2.style.border = `1px solid red`;
        x2.value = 'Wrong id, try again or remove whitespaces'
        setTimeout(() => {
          
          x2.style.border = `1px solid #50d8d7`;
          x2.value = ''
        }, 5000);
      }
    }).then((l)=>{
      if(l === 'Paid'){
        const paydiv = document.createElement('div');
        paydiv.className = 'box-inner';
        const inner = document.createElement('div');
        inner.className = 'name-inner';
        const request = document.createElement('h3');
        request.id = 'rqp';
        request.onclick = rqp;
        request.innerHTML = 'Request Payment'
        inner.appendChild(request);
        paydiv.appendChild(inner)

        document.querySelector('.box').appendChild(paydiv);

      }
    })

  })

function rqp(){ 
     const w = document.querySelector('.box');
    const x = `        <div class="box-inner">
    <div class="name-inner">
<h3 class="rqpd"> DONE, YOW WILL RECEIVE A MAIL SOON </h3></div> 
</div>`
w.insertAdjacentElement("beforeend", x)
setTimeout(() => {
  w.removeChild(lastelement)
}, 2333);
  }