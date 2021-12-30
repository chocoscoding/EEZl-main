const firebaseConfig = {
    apiKey: "AIzaSyCMw0DC_fwjf9dL56T5rM64AdnZNc91OIM",
    authDomain: "eezl-aa5a5.firebaseapp.com",
    databaseURL: "https://eezl-aa5a5-default-rtdb.firebaseio.com",
    projectId: "eezl-aa5a5",
    storageBucket: "eezl-aa5a5.appspot.com",
    messagingSenderId: "649889009305",
    appId: "1:649889009305:web:ad63aae38c1fb1c9ca7208",
    measurementId: "G-ZT25LCSX13"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const dbf = firebase.firestore();
  
  
  auth.onAuthStateChanged( user => {
    if (user) {
      document.querySelector('.account').style.display = 'none';
      document.querySelector('.dashboard').style.display = 'flex';
    } else {
      console.log('not logged in');
      document.querySelector('.account').style.display = 'flex';
      document.querySelector('.dashboard').style.display = 'none';
    }
  
  });
  