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
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const form = document.querySelector('#submit-msg');
  db.settings({ timestampsInSnapshot: true, merge: true });

  const chatdispaly = document.querySelector('#msgcul');  

 var userm;
  let userId;

  auth.onAuthStateChanged( user => {
    if (user) {
      localStorage.setItem('userid', user.uid);
      userm = user.email;
      userId = user.uid;
    } else {
      window.location.replace("login.html");
    }
  
  });
  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dateTime = date+' '+time;
  var myText;
  var rand = function() {
    return Math.random().toString(24).substr(2);
};

var token = function() {
    return rand() + rand(); // to make it longer
};

let v = localStorage.getItem('userid');
let w = localStorage.getItem('projectId');
  const k = db.collection('projects').doc(v).collection(w);
  k.doc('info').onSnapshot((doc)=>{
    let statusc = doc.data().projectstatus;

    if(statusc === 'Active'){
  
db.collection('projects').doc(v).collection(w).doc('chat').collection('main').orderBy("timestamp" , "asc").onSnapshot(snapshot => {
  document.querySelector('#nod').style.display = 'block';
  document.querySelector('#nod').innerHTML = 'Loading...';
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if(change.type == 'added'){
    document.querySelector('#nod').style.display = 'none';
      if ((change.doc.data().id) == "customer"){
      let li = document.createElement('li');
      li.className = ' cstmr';
      let messagetxtd = document.createElement('p');
      messagetxtd.textContent = change.doc.data().messagetex;
      
      li.appendChild(messagetxtd)
      
      chatdispaly.appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = ' wrkr';
        let messagetxtd = document.createElement('p');
        messagetxtd.textContent = change.doc.data().messagetex;
        
        li.appendChild(messagetxtd)

        chatdispaly.appendChild(li);
        
      };
};
  })
});
}
else{
  document.querySelector('#nod').style.display = 'block';
  document.querySelector('#nod').innerHTML = 'Project Ended/ Paused';

}

})
 function run(){
  
  db.collection('projects').doc(v).collection(w).doc('chat').collection('main').add({
    messagetex: messaget.value,
    id: 'customer',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  messaget.value = '';
};
