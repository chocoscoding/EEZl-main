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
  databaseURL: "https://eezl-2d5a5-default-rtdb.firebaseio.com",
  projectId: "eezl-2d5a5",
  storageBucket: "eezl-2d5a5.appspot.com",
  messagingSenderId: "1019518275328",
  appId: "1:1019518275328:web:aee5bfc1b70badced6ade5",
  measurementId: "G-MS5RSHEGHN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();


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



      // const sec = document.getElementById('sec');
      // const min = document.getElementById('min');
      // const hour = document.getElementById('hour');
      // const day = document.getElementById('day');
      // var timer = setInterval(()=>{
      //     var startDate = new Date().getTime();
      //     var endDate = new Date('sep 14 2021 13:00:00').getTime();
      //     var duration = endDate -startDate;
      //     var days = Math.floor(duration / (1000 * 60 * 60 * 24));
      //     var hours = Math.floor(duration % (1000 * 60 * 60 * 24) /  (1000 * 60 * 60));
      //     var minutes = Math.floor(duration % (1000 * 60 * 60) /  (1000 * 60));
      //     var seconds = Math.floor(duration % (1000 * 60) / (1000 ));

      //     day.innerHTML = days;
      //     hour.innerHTML = hours;
      //     min.innerHTML = minutes;
      //     sec.innerHTML = seconds;

      //     if(days < 10){
      //         day.innerHTML = '0' + days;
      //       }
      //       if(hours < 10){
      //         hour.innerHTML = '0' + hours;
              
      //       }
      //       if(minutes < 10){
      //         min.innerHTML = '0' + minutes;
              
      //       }
      //       if(seconds < 10){
      //         sec.innerHTML = '0' + seconds;

      //     }
      //     if(duration < 0){
      //       clearInterval(timer);
      //     }
      // }, 1000);

      
      const sliderCont = document.querySelector('.say');
      const buttoncont = document.querySelector('.whatocs_main');
      const sliders = document.querySelector('.say_item');
      const offset = document.querySelector('.say_item').clientWidth;


let currentIndex = 0;
let shift = 0


      // Initialize Firebase
      // function logOut() {
      //   auth.signOut().then(() => {
      //     if (user) {
      //       console.log('user signed out');
      //       window.location.replace("login.html");
            
      //     } else {
      //       console.log('user currently logged in');
            
      //     }
      //   })
      // };

      function firstly(){
        auth.onAuthStateChanged( user => {
          if (user) {
            db.ref().child("users").child(user.uid).get().then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();        }
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
          }
        
        });
        }
        firstly();
      