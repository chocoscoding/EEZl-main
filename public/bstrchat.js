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
  const auth = firebase.auth();
  const db = firebase.firestore();
  const dbf = firebase.database();
  const form = document.querySelector('#submit-msg');
  db.settings({ timestampsInSnapshot: true, merge: true });

  const chatdispaly = document.querySelector('#msgcul');  

 var userm;
  let userId;
  auth.onAuthStateChanged( user => {
    if (user) {
      userId = user.uid;
      dbf.ref().child("users").child(user.uid).get().then((snapshot) => {
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
      window.location.replace("boosterlogin.html")
    }
  
  });
  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dateTime = date+' '+time;
  var myText;

let v = localStorage.getItem('cstmrid');
let w = localStorage.getItem('tempproid');

if(v && w){
  const k = db.collection('projects').doc(v).collection(w);
  k.doc('info').onSnapshot((doc)=>{
    let statusc = doc.data().projectstatus;

    if(statusc === 'Active'){
  
db.collection('projects').doc(v).collection(w).doc('chat').collection('main').orderBy("timestamp" , "asc").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if(change.type == 'added'){
    document.querySelector('#nod').style.display = 'none';
      if ((change.doc.data().id) == "worker"){
      let li = document.createElement('li');
      li.className = 'cstmr';
      let messagetxtd = document.createElement('p');
      messagetxtd.textContent = change.doc.data().messagetex;
      
      li.appendChild(messagetxtd)
      
      chatdispaly.appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = 'wrkr';
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
}
else{
  document.querySelector('#nod').style.display = 'block';
  document.querySelector('#nod').innerHTML = 'No project id found';
}
 function run(){
  
  db.collection('projects').doc(v).collection(w).doc('chat').collection('main').add({
    messagetex: messaget.value,
    id: 'worker',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  messaget.value = '';
};
