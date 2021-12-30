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
  // const app = firebase.app();
  const auth = firebase.auth();
  const db = firebase.firestore();
  const form = document.querySelector('#submit-msg');
  db.settings({timestampsInSnapshots: true });

  const chatdispaly = document.querySelector('#msgcul');  

 var userm;
  let userId;

  // window.onload = startchat();

  auth.onAuthStateChanged( user => {
    if (user) {
      
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
    return Math.random().toString(24).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};


db.collection('projects').doc('projecttest123').collection('messages').orderBy("timestamp" , "asc").onSnapshot(snapshot => {

  let changes = snapshot.docChanges();
  changes.forEach(change => {
    // console.log(change.doc.data());
    if(change.type == 'added'){

    
      if ((change.doc.data().id) == "customer"){
      let li = document.createElement('li');
      li.className = ' wrkr';
      let messagetxtd = document.createElement('p');
      messagetxtd.textContent = change.doc.data().messagetex;
      
      li.appendChild(messagetxtd)
      
      chatdispaly.appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = ' cstmr';
        let messagetxtd = document.createElement('p');
        messagetxtd.textContent = change.doc.data().messagetex;
        
        li.appendChild(messagetxtd)

        chatdispaly.appendChild(li);
        
      };
};
  })

});



    function run(){
      if (messaget.value == ''){
    window.alert('cant send an empty message');
  }
  else{
    
    db.collection('projects').doc('projecttest123').collection('messages').add({
      messagetex: messaget.value,
      id: 'worker',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    messaget.value = '';
  }
  

};
