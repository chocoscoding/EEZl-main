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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const app = firebase.app();
    const auth = firebase.auth();
    const dbf = firebase.firestore();
    const db = firebase.database();
    var userrid;
    var cuserrid;
    var ca;
    var userr;
    var myproid;
  var tempproid;
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
        window.location.replace("boosterlogin.html")
      }
    
    });
    function get(){
  const a =  localStorage.getItem('bstrprojectId');
  
  dbf.collection('eworker').doc(userrid).collection('bjobs').doc(a).get().then((doc)=>{
    const x = doc.data();
    cuserrid = x.projectdirectory.z;
    ca = x.projectdirectory.ftoken;
  }).then(start)
}
    function getloading(){
  const a =  localStorage.getItem('bstrprojectId');
  dbf.collection('eworker').doc(userrid).collection('bjobs').doc(a).get().then((doc)=>{
    const x = doc.data();
    cuserrid = x.projectdirectory.z;
    ca = x.projectdirectory.ftoken;
    sessionStorage.setItem('tempproid', x.projectdirectory.ftoken)
    localStorage.setItem('tempproid', x.projectdirectory.ftoken)
    localStorage.setItem('cstmrid', x.projectdirectory.z)

  })
}
    function start() {
      let j =document.querySelectorAll('.dashinfo');
      if(ca === ( null || undefined || '')){
        j.forEach(el => el.classList.toggle('error'))
        document.querySelector('#ProjectStatus').innerHTML = 'Id not found';
        j.forEach(el => el.innerHTML = 'Id not found')
        setTimeout(()=>{
          j.forEach(el => el.classList.toggle('error'))
          document.querySelector('#ProjectStatus').innerHTML = 'No projectid';
          j.forEach(el => el.innerHTML = 'No projectid')
  },5000)
      }
      else{
            document.querySelector('#ProjectStatus').innerHTML = 'Loading';
            j.forEach(el => el.innerHTML = 'Loading');
            pb();
  
      }
    }
    document.querySelector('#projectidinputsubmit').addEventListener('click', async(e)=>{
      e.preventDefault();
      let x =document.querySelector('#ProjectId');
      let k = document.getElementsByName('ProjectId')[0];
      if(x.value !== (null || undefined || '')){
          localStorage.setItem('bstrprojectId', x.value);
          sessionStorage.setItem('tempproida', x.value)
          myproid = x.value;
          get();
      }
      else{
        k.placeholder= 'Wrong id, try again or remove whitespaces';
        x.style.border = '2px solid red';
        setTimeout(() => {
          x.style.border = '2px solid rgb(80 216 215)';
          k.placeholder = 'Project Id';
        }, 2000);
      }
    })
  
  
  
  function pb(){
    dbf.collection('projects').doc(cuserrid).collection(ca).doc('info').onSnapshot((doc)=>{
      const x = doc.data();
      if(x.projectstatus === 'Active'){
        displayinfo();
      }
      else if(x.projectstatus === 'Paused'){
        let j =document.querySelectorAll('.dashinfo');

          j.forEach(el => el.classList.toggle('error'))
          document.querySelector('#ProjectStatus').innerHTML = 'Project Paused';
          j.forEach(el => el.innerHTML = 'Project Paused')
          setTimeout(()=>{
            j.forEach(el => el.classList.toggle('error'))
            document.querySelector('#ProjectStatus').innerHTML = 'No projectid';
            j.forEach(el => el.innerHTML = 'No projectid')
    },5000)
      }
      else if(x.projectstatus === 'Ended'){
        let j =document.querySelectorAll('.dashinfo');

        j.forEach(el => el.classList.toggle('error'))
        document.querySelector('#ProjectStatus').innerHTML = 'Project Ended';
        j.forEach(el => el.innerHTML = 'Project Ended')
        setTimeout(()=>{
          j.forEach(el => el.classList.toggle('error'))
          document.querySelector('#ProjectStatus').innerHTML = 'No projectid';
          j.forEach(el => el.innerHTML = 'No projectid')
  },5000)
      }
    })
  
  }
  function displayinfo(){
    const eezlb = localStorage.getItem('timeleft');
    
    const q = dbf.collection('projects').doc(cuserrid).collection(ca);
    
    q.doc('info').onSnapshot((doc)=>{
        const x = doc.data();
        if(x.projectstatus === 'Active'){
    const t = q.doc('info').onSnapshot((doc) => {
      
      document.querySelector('#ProjectStatus').innerHTML = doc.data().projectstatus;
    });
    (function(){
      dbf.collection('eworker').doc(userrid).collection('bjobs').doc(myproid).get().then((doc) => {
        document.querySelector('#probooster').innerHTML = doc.data().gameusername;
        document.querySelector('#proid').innerHTML = doc.data().gamepassword;
        })
  })();
  (function(){
    if((eezlb) && (a === tempproidd) ){      
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
    q.doc('info').get().then((doc)=>{
      document.querySelector('#procost').innerHTML = '$' + doc.data().projectcost;
  })
  })();
}
})
  
  }
  
  
  function onloading () {
    if(localStorage.getItem('bstrprojectId')){
      getloading();
    const a = sessionStorage.getItem('tempproid')
    const b = localStorage.getItem('cstmrid')
    const c = sessionStorage.getItem('tempproida')
    if(a){
      const k = dbf.collection('projects').doc(b).collection(a);
      k.doc('info').onSnapshot((doc)=>{
        const x = doc.data();
        if(x.projectstatus === 'Active'){
      k.doc('info').onSnapshot((doc) => {      
        document.querySelector('#ProjectStatus').innerHTML = doc.data().projectstatus;
      });
  
      dbf.collection('eworker').doc(userrid).collection('bjobs').doc(c).get().then((doc) => {
        document.querySelector('#probooster').innerHTML = doc.data().gameusername;
        document.querySelector('#proid').innerHTML = doc.data().gamepassword;
        })
      
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
    k.doc('progress').onSnapshot((doc)=>{
      document.querySelector('#progress').innerHTML = doc.data().percentage + '%';
    })
  })

}})
    }
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