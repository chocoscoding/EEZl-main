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
  const dbf = firebase.firestore();

var userr;
var userrid;
var tempproid;
const a =  localStorage.getItem('projectId');
const tempproidd = sessionStorage.getItem('tempproid');
// auth.onAuthStateChanged( user => {
  //   if (user) {
    //     console.log(user);
    //   } else {
      //    window.location.replace("login.html");
      //     console.log('not logged in');
      
      //   }
      
      // });
      



  auth.onAuthStateChanged( user => {
    userr = user
    userrid = user.uid;
    if (user) {
      firebase.auth().onAuthStateChanged(User => {
      if(User.emailVerified){ 
      }else{
        window.location.replace("login.html");
       }
    });
    } else {
      window.location.replace("login.html");
    }
  
  });

  function start() {
    let j =document.querySelectorAll('.dashinfo');
    if(a === ( null || undefined || '')){
      console.log("projectId not found");
      j.forEach(el => el.classList.toggle('error'))
      document.querySelector('#ProjectStatus').innerHTML = 'Id not found';
      j.forEach(el => el.innerHTML = 'Id not found')
      console.log('before checking');
      setTimeout(()=>{
        j.forEach(el => el.classList.toggle('error'))
        document.querySelector('#ProjectStatus').innerHTML = 'No projectid';
        j.forEach(el => el.innerHTML = 'No projectid')
},5000)
    }
    else{
      // dbf.collection('projects').doc(userrid).collection(a).doc('info').get().then((query) => {
        // if(query.size > 0){
          document.querySelector('#ProjectStatus').innerHTML = 'Loading';
          j.forEach(el => el.innerHTML = 'Loading');
          pb();
        //   console.log('its valid');
        // }
        // else{
        //   console.log('its not valid');
        //         j.forEach(el => el.classList.toggle('error'))
          // document.querySelector('#ProjectStatus').innerHTML = 'Id not found';
          // j.forEach(el => el.innerHTML = 'Id not found');
        //   console.log('After checking');
        //   setTimeout(()=>{
        //           j.forEach(el => el.classList.toggle('error'))
        //     document.querySelector('#ProjectStatus').innerHTML = 'No projectid';
        //     j.forEach(el => el.innerHTML = 'No projectid')
        //   },7500)
        // }
        // console.log(query.exists);
        // });

    }
  }
  document.querySelector('#projectidinputsubmit').addEventListener('click', (e)=>{
    e.preventDefault();
    let x =document.querySelector('#ProjectId');
    let k = document.getElementsByName('ProjectId')[0];
    if(x.value !== (null || undefined || '')){
        localStorage.setItem('projectId', x.value);
        sessionStorage.setItem('tempproid', x.value)

        start();
    }
    else{
      k.placeholder= 'put a correct input';
      x.style.border = '2px solid red';
      setTimeout(() => {
        x.style.border = '2px solid rgb(80 216 215)';
        k.placeholder = 'Project Id';
      }, 2000);
    }
  })
  function logOut() {
    auth.signOut().then((user) => {
      if (user) {
        console.log('user signed out');
        window.location.replace("login.html");
        
      } else {
        window.alert('something went wrong, try again')
        
      }
    })
  };



function pb(){

// const q = dbf.collection('projects').doc(userrid).collection(a);

displayinfo();

// q.doc('projectstatus').onSnapshot((doc) => {

//   document.querySelector('#ProjectStatus').innerHTML = doc.data().status;
// });
// q.doc('booster').onSnapshot((doc) => {

//   document.querySelector('#probooster').innerHTML = doc.data().boosterusernames;
// });
// q.doc('cost').onSnapshot((doc) => {

//   document.querySelector('#procost').innerHTML = doc.data().projectcost;
// });
// dbf.collection('projects').doc('projecttest123').collection('projects_done').doc('d03T2dz8NVnZ5vGC8z0g').onSnapshot((doc) => {
//   document.querySelector('#proid').innerHTML = doc.data().projectid;
// });




// var endDay;
// q.doc('Start-time').onSnapshot((doc) => {
//    endDay = doc.data().starttime;
// });
// var timeleft = setInterval( () => {
//   const startDate = new Date().getTime();
//   const endDate = new Date(endDay)
//   let duration = endDate - startDate;
//   let days = Math.floor(duration/(1000 * 60 * 60 * 24));
//   let hours = Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   let minutes = Math.floor(duration % (1000 * 60 * 60) / (1000 * 60));
//   let seconds = Math.floor(duration % (1000 * 60) / (1000));

//   if(days < 10){
//     days = '0' + days;
//   }
//   if(hours < 10){
//     hours = '0' + hours;
    
//   }
//   if(minutes < 10){
//     minutes = '0' + minutes;
    
//   }
//   if(seconds < 10){
//     seconds = '0' + seconds;

// }
// // const l = 'Loading...'
// // document.querySelector('#timeleft').innerHTML = `${days || l}<span class='minion'>d</span> ${hours || ''}<span class='minion'>h</span> ${minutes || ''}<span class='minion'>m</span> ${seconds || ''}<span class='minion'>s</span>`;
// // console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
// if(duration < 0){
//   clearInterval(timeleft);
//   document.querySelector('#timeleft').innerHTML = `Project Completed`;
//   document.querySelector('#timeleft').style.color = 'rgb(9, 7, 36)';
// }
// })

// const process1 = [
//   'IronI',
//   'IronII',
//   'IronIII',
//   'IronIV',
//   'BronzeI',
//   'BronzeII',
//   'BronzeIII',
//   'BronzeIV',
//   'SilverI',
//   'SilverII',
//   'SilverII',
//   'SilverIV',
//   'GoldI',
//   'GoldII',
//   'GoldIII',
//   'GoldIV',
//   'PlatinumI',
//   'PlatinumII',
//   'PlatinumIII',
//   'PlatinumIV',
//   'EmeraldI',
//   'EmeraldII',
//   'EmeraldIII',
//   'EmeraldIV',
//   'DiamondI',
//   'DiamondII',
//   'DiamondIII',
//   'DiamondIV',
//   'Master',
// ];

// q.doc('projectprogress').onSnapshot((doc) => {

//    let no1 = doc.data().start;
//    let no2 = doc.data().current;
//    let no3 = doc.data().end;

//    let progress =  (process1.indexOf(no3)) - (process1.indexOf(no1));
//    let final = ((process1.indexOf(no2)) / progress) * 100;
//   document.querySelector('#progress').innerHTML = `${final}%`;
// });

}



let endstart =  document.querySelector('.endproject'); 
let endchoicebody =  document.querySelector('.confirm'); 
let choiceyes =  document.querySelector('.yes'); 
let choiceno =  document.querySelector('.no'); 
let loadingani = document.querySelector('.loadingani');
endstart.addEventListener('click', ()=>{
  endstart.style.display = 'none';
  endchoicebody.style.display = 'block';
})
choiceno.addEventListener('click', ()=>{
  endstart.style.display = 'block';
  endchoicebody.style.display = 'none';
})
choiceyes.addEventListener('click', ()=>{
  dbf.collection('projects').doc(cuserrid).collection(ca).doc('info').update({
      projectstatus : 'Ended'
  })
  endchoicebody.style.display = 'none';
  loadingani.style.display = 'block'
})


function displayinfo(){
  const eezla = localStorage.getItem('boosterusernames');
  const eezlb = localStorage.getItem('timeleft');  
  const q = dbf.collection('projects').doc(userrid).collection(a);
  
  const t = q.doc('info').onSnapshot((doc) => {
    
    document.querySelector('#ProjectStatus').innerHTML = doc.data().projectstatus;
  });
  (function(){
    if((eezla) && (a === tempproidd)){
      document.querySelector('#probooster').innerHTML = localStorage.getItem('boosterusernames');
    }
      else{
        q.doc('info').onSnapshot((doc) => {
      
          document.querySelector('#probooster').innerHTML = doc.data().boosterusernames;
          localStorage.setItem('boosterusernames', doc.data().boosterusernames)
  });
}
})();
(function(){
  if((eezlb) && (a === tempproidd) ){
    console.log('its valid');
    
    let timeleft = setInterval( () => {
      const startDate = new Date().getTime();
      const endDate = new Date(eezlb)
      let duration = endDate - startDate;
      let days = Math.floor(duration/(1000 * 60 * 60 * 24));
      let hours = Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      let minutes = Math.floor(duration % (1000 * 60 * 60) / (1000 * 60));
      let seconds = Math.floor(duration % (1000 * 60) / (1000));
      
      if(days < 10){
        days = '0' + days;
      }
      if(hours < 10){
        hours = '0' + hours;
        
      }
      if(minutes < 10){
        minutes = '0' + minutes;
        
      }
      if(seconds < 10){
        seconds = '0' + seconds;
        
      }
      const l = 'Loading...'
      document.querySelector('#timeleft').innerHTML = `${days || l}<span class='minion'>d</span> ${hours || ''}<span class='minion'>h</span> ${minutes || ''}<span class='minion'>m</span> ${seconds || ''}<span class='minion'>s</span>`;
      if(duration < 0){
        clearInterval(timeleft);
        document.querySelector('#timeleft').innerHTML = `Project Completed`;
        document.querySelector('#timeleft').style.color = 'rgb(9, 7, 36)';
      }
    })
  }
  else{    
    let endDay;
    q.doc('info').get().then((doc) => {
      endDay = doc.data().endofservice.toDate();
      localStorage.setItem('eezlb', endDay)})
      .then(()=>{
        
        let timeleft = setInterval( () => {
          const startDate = new Date().getTime();
          const endDate = new Date(endDay)
          let duration = endDate - startDate;
          let days = Math.floor(duration/(1000 * 60 * 60 * 24));
  let hours = Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(duration % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(duration % (1000 * 60) / (1000));
  
  if(days < 10){
    days = '0' + days;
  }
  if(hours < 10){
    hours = '0' + hours;
    
  }
  if(minutes < 10){
    minutes = '0' + minutes;
    
  }
  if(seconds < 10){
    seconds = '0' + seconds;
    
  }
  const l = 'Loading...'
  document.querySelector('#timeleft').innerHTML = `${days || l}<span class='minion'>d</span> ${hours || ''}<span class='minion'>h</span> ${minutes || ''}<span class='minion'>m</span> ${seconds || ''}<span class='minion'>s</span>`;
  if(duration < 0){
  clearInterval(timeleft);
  document.querySelector('#timeleft').innerHTML = `Project Completed`;
  document.querySelector('#timeleft').style.color = 'rgb(9, 7, 36)';
}
})
});
}
})();

(function() {
  q.doc('progress').onSnapshot((doc)=>{
    document.querySelector('#progress').innerHTML = doc.data().percentage + '%';
  })
})();
(function() {
  document.querySelector('#proid').innerHTML = sessionStorage.getItem('tempproid');
  q.doc('info').get().then((doc)=>{
    document.querySelector('#procost').innerHTML = '$' + doc.data().projectcost;
})
})();

}


function onloading () {
  const userrid = localStorage.getItem('userid');
  const a = sessionStorage.getItem('tempproid')
  if(a){
    const k = dbf.collection('projects').doc(userrid).collection(a);
    k.doc('info').onSnapshot((doc) => {      
      document.querySelector('#ProjectStatus').innerHTML = doc.data().projectstatus;
    });

    k.doc('info').onSnapshot((doc) => {
      
      document.querySelector('#probooster').innerHTML = doc.data().boosterusernames;
      localStorage.setItem('boosterusernames', doc.data().boosterusernames)
    });
    
    let endDay;
    k.doc('info').get().then((doc) => {
      endDay = doc.data().endofservice.toDate();
      })
      .then(()=>{
        
        let timeleft = setInterval( () => {
          const startDate = new Date().getTime();
          const endDate = new Date(endDay)
          let duration = endDate - startDate;
          let days = Math.floor(duration/(1000 * 60 * 60 * 24));
  let hours = Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(duration % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(duration % (1000 * 60) / (1000));
  
  if(days < 10){
    days = '0' + days;
  }
  if(hours < 10){
    hours = '0' + hours;
    
  }
  if(minutes < 10){
    minutes = '0' + minutes;
    
  }
  if(seconds < 10){
    seconds = '0' + seconds;
    
  }
  const l = 'Loading...'
  document.querySelector('#timeleft').innerHTML = `${days || l}<span class='minion'>d</span> ${hours || ''}<span class='minion'>h</span> ${minutes || ''}<span class='minion'>m</span> ${seconds || ''}<span class='minion'>s</span>`;
  if(duration < 0){
  clearInterval(timeleft);
  document.querySelector('#timeleft').innerHTML = `Project Completed`;
  document.querySelector('#timeleft').style.color = 'rgb(9, 7, 36)';
}
})
})
.then(()=>{
  k.doc('info').get().then((doc)=>{
      document.querySelector('#procost').innerHTML = '$' + doc.data().projectcost;
  })
})
.then(()=>{
  document.querySelector('#proid').innerHTML = a;
  k.doc('progress').onSnapshot((doc)=>{
    document.querySelector('#progress').innerHTML = doc.data().percentage + '%';
  })
})
  }
}
onloading();



function changestatus(){
  const userrid = localStorage.getItem('userid');
  const a = sessionStorage.getItem('tempproid')
    const k = dbf.collection('projects').doc(userrid).collection(a);
    document.querySelector('#ProjectStatus').innerHTML = 'Loading...'
   k.doc('info').get().then((doc)=>{
     return doc.data().projectstatus;
   }).then(ret =>{
     if(ret === 'Active'){
       k.doc('info').update({
         projectstatus: 'Paused'
       })
     }
     else{
      k.doc('info').update({
        projectstatus: 'Active'
      })
     }
    })
    .then(()=>{
      k.doc('info').get().then((doc)=>{
        document.querySelector('#ProjectStatus').innerHTML = doc.data().projectstatus;
      })
    })
}