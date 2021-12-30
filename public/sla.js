const firebaseConfig = {
  apiKey: "AIzaSyA4AI_Tg675277QPU9MhZQGPqf-3H4ni2o",
  authDomain: "eezl-2d5a5.web.app",
  databaseURL: "https://eezl-2d5a5-default-rtdb.firebaseio.com",
  projectId: "eezl-2d5a5",
  storageBucket: "eezl-2d5a5.appspot.com",
  messagingSenderId: "1019518275328",
  appId: "1:1019518275328:web:aee5bfc1b70badced6ade5",
  measurementId: "G-MS5RSHEGHN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const dbf = firebase.firestore();
const store = firebase.storage();
const side = document.querySelector('.side');
const openn = document.querySelector('.open');
const closen = document.querySelector('.close');
var rnd = (Math.random() + 1).toString(36).substring(4);
function opennav(){
    side.style.display = 'flex';
    openn.style.display = 'none';
    side.style.transition = '0.3s all ease';

}
function closenav(){
    side.style.display = 'none';
    openn.style.display = 'block';
    
}
const semail = document.querySelector('#s_email');
const saccountpassword = document.querySelector('#s_accountpswd');
const saccountusername = document.querySelector('#s_accountusrn');
const srank = document.querySelector('#s_rank');
const sdivision = document.querySelector('#s_division');
const smark = document.querySelector('#s_mark');
const smatcheswon = document.querySelector('#s_matcheswon');
const sminibid = document.querySelector('#s_minbid');
const skins = document.querySelector('#s_skins')
const champions = document.querySelector('#s_champions')
const sai1 = document.querySelector('#s_ai1');
const sai2 = document.querySelector('#s_ai2');
const sai3 = document.querySelector('#s_ai3');
const  checkinfo1 = document.querySelector('#checkinfo1')
const  checkinfo2 = document.querySelector('#checkinfo2')
const  checkinfo3 = document.querySelector('#checkinfo3')
const  checkinfo4 = document.querySelector('#checkinfo4')
const  checkinfo5 = document.querySelector('#checkinfo5')
const  checkinfo6 = document.querySelector('#checkinfo6')
const  checkinfo7 = document.querySelector('#checkinfo7')
const  checkinfo8 = document.querySelector('#checkinfo8')
const  checkinfo9 = document.querySelector('#checkinfo9')
const  checkinfo10 = document.querySelector('#checkinfo10')
var z;
var y;
var x;
var w = [];
var u =[];
var ua;
var ub;
var uc;
var ud;

auth.onAuthStateChanged( user => {
  z = user;
  if (user) {
    document.querySelector('.account').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'flex';
  } else {
    document.querySelector('.account').style.display = 'flex';
    document.querySelector('.dashboard').style.display = 'none';
  }
  w.push(rnd);
});
function rand() {
  return Math.random().toString(24).substr(2);
};
function dog(){
  return rand() + z.uid.substring(0,10);
}
document.querySelector('#shownext').addEventListener('click', (event)=>{
    event.preventDefault();
    if((semail.value === '') || (saccountpassword.value === "") || (saccountusername.value === "") || (srank.value === "") || (sdivision.value === "") || (smark.value === "") || (smatcheswon.value === "") || (sminibid.value === "") || (sai1.value === "") || (sai2.value === "") || (sai3.value === "") || (skins.value === "") || (champions.value === "")){
      document.querySelectorAll('.l').forEach(element => {
        let e = element.value;
        if(e === null || e === ''){
          element.classList.toggle('errorshown');

        }
      });
    }
    else{
      let uaa = sai1.files
      let uba = sai3.files
      let uca = sai2.files
      u = [];
      let dha = Array.from(uaa);
      let dhb = Array.from(uba);
      let dhc = Array.from(uca);
      dha.forEach(file => u.push(file));
      dhb.forEach(file => u.push(file));
      dhc.forEach(file => u.push(file));

      document.querySelector('#accountdata').style.display = 'none';
      document.querySelector('#confirminfo').style.display = 'block';
      checkinfo1.innerHTML = semail.value;
      checkinfo2.innerHTML = saccountpassword.value;
      checkinfo3.innerHTML = saccountusername.value;
      checkinfo4.innerHTML = srank.value;
      checkinfo5.innerHTML = sdivision.value;
      checkinfo6.innerHTML = smark.value;
      checkinfo7.innerHTML = smatcheswon.value;
      checkinfo9.innerHTML = skins.value;
      checkinfo10.innerHTML = champions.value;
      checkinfo8.innerHTML = `${sminibid.value} USD`;
      
    }
})
document.querySelector('#shownext2').addEventListener('click', (event)=>{
    event.preventDefault();
    document.querySelector('#accountdata').style.display = 'block';
    document.querySelector('#confirminfo').style.display = 'none';
})


sminibid.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
smatcheswon.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
smark.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
sdivision.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
srank.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
saccountusername.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
saccountpassword.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
semail.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
sai1.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
sai2.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
sai3.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
skins.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})
champions.addEventListener('click', (e)=>{
  let classL = e.target.classList[1];
  if(classL === 'errorshown'){
    e.target.classList.toggle('errorshown');
  }
})

const subform = document.querySelector('#submitall');

subform.addEventListener('click', ()=>{
  const dodge = dog();
  document.querySelector('.loading').style.display = 'flex';
  dbf.collection('market').doc('active').collection('main').add({
    mail: semail.value,
    password: saccountpassword.value,
    username: saccountusername.value,
    rank: srank.value,
    division: sdivision.value,
    mark: smark.value,
    matcheswon: smatcheswon.value,
    price: sminibid.value,
    imageamount: u.length,
    mainmain:z.uid,
    active: true,
    mainmail:z.email,
    Skins: skins.value,
    Champions: champions.value,
    pic1: dodge+'--'+1+'--' + 'img',
    pic2: dodge+'--'+2+'--' + 'img',
    pic3: dodge+'--'+3+'--' + 'img',
    useridb: ''
  
  }).then(()=>{
    dbf.collection('eworker').doc(z.uid).collection('sellaccounts').add({
      accountusername: document.querySelector('#s_accountusrn').value,
      price: document.querySelector('#s_minbid').value,
      pstatus: 'Unpaid',
      status: 'Pending'
    })
  }).then(()=>{

  
  for(let i=0; i<u.length; i++){
    store.ref('accountmarket/'+dodge+'--'+i+'--' + 'img').put(u[i]).then(()=>{
         semail.value = ''
         saccountpassword.value = ''
         saccountusername.value = ''
         srank.value = ''
         sdivision.value = ''
         smark.value = ''
         smatcheswon.value = ''
         sminibid.value = ''
         sai1.value = ''
         sai2.value = ''
         sai3.value = ''
         skins.value = ''
         champions.value = ''
         document.querySelector('#accountdata').style.display = 'block';
         document.querySelector('#confirminfo').style.display = 'none';
         document.querySelector("body > main > div.loading > h3:nth-child(1)").style.display = 'block';
         document.querySelector("body > main > div.loading > h3:nth-child(2)").style.display = 'none';
         document.querySelector("body > main > div.loading > div.dot1").style.display = 'none';
         document.querySelector("body > main > div.loading > div.dot2").style.display = 'none';
         document.querySelector("body > main > div.loading > div.dot3").style.display = 'none';
         
  })
  .catch((error)=>{
    console.log(error.message);
  })
}
})
});
document.querySelector("body > main > div.loading")   
document.querySelector('#return').addEventListener('click', ()=>{
  document.querySelector('.loading').style.display = 'none';
});