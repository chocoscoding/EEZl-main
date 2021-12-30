  
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
  const app = firebase.app();
  const auth = firebase.auth();
  const dbf = firebase.firestore();
  
  let mail;
  let userId;
  auth.onAuthStateChanged( user => {
    if (user) {
       userId = user.uid;
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

  dbf.collection('accountbought').doc(userId).collection('accouts').onSnapshot((query)=>{
        if(query.size > 0){
    let x = query.docChanges();
    x.forEach(doc =>{
      if(doc.type === 'added'){
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
        projectide.textContent = doc.doc.id;
        copybtn.appendChild(buttone);
        tablerow.appendChild(datee);
        tablerow.appendChild(projectide);
        tablerow.appendChild(copybtn);
        tablebody.appendChild(tablerow);
    }
    numbering();
    })
  }
  else{
 document.querySelector('#nocontent').innerHTML = "No data found"
  }
  })

  function numbering(){
    let x =document.querySelectorAll('#date-main');
    for(index =0; index<x.length; index++){
      x[index].innerHTML = index + 1;
    }
  }
  document.querySelector('#projectidinputsubmit').onclick = ()=>{
    const docvalue = document.querySelector('.projectidinput');
    const x = document.getElementsByName('ProjectId')[0];
    if(docvalue.value !== (null || undefined || '')){
      dbf.collection('accountbought').doc(userId).collection('accouts').doc(docvalue.value).get().then(doc =>{
        if(doc.exists){
          document.querySelector('.box').style.filter = `blur(0px)`;
          document.querySelector('.box').style.cursor = `pointer`;
          dbf.collection('accountbought').doc(userId).collection('accouts').doc(docvalue.value).onSnapshot((query)=>{
                const j = query.data();
              document.querySelector('#purchaseid').innerHTML = query.id; 
              document.querySelector('#peicebought').innerHTML = '$' + j.price; 
              document.querySelector('#accountusername').innerHTML = j.username; 
              document.querySelector('#accountmail').innerHTML = j.mail; 
              document.querySelector('#accountpasswrd').innerHTML = j.password; 
              document.querySelector('#rank').innerHTML = j.rank; 
              document.querySelector('#division').innerHTML = j.division; 
              document.querySelector('#mark').innerHTML = j.mark; 
              document.querySelector('#matcheswon').innerHTML = j.matcheswon; 
             
            
            })
        }
        else{
          docvalue.value = '';
          x.placeholder = `This id doesn't exists`;
          docvalue.style.border = `1px solid red`
          setTimeout(() => {
            x.placeholder = 'Input Your Purchase Id';
            docvalue.style.border = `1px solid #50D8D7`
          }, 3000);
        }
      })
    }
    else{
      x.placeholder = 'There is no input';
      docvalue.style.border = `1px solid red`
      setTimeout(() => {
        x.placeholder = 'Input Your Purchase Id';
        docvalue.style.border = `1px solid #50D8D7`
      }, 3000);
    }
  }
  
  
