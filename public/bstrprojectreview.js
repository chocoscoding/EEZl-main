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
  const store = firebase.storage();
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
    } else {
      window.location.replace("boosterlogin.html")
    }
  
  });
  }
  firstly();
  var eezlarray;
  const b = localStorage.getItem('cstmrid');
  const a =     localStorage.getItem('tempproid')
  if(a && b){
  const k = dbf.collection('projects').doc(b).collection(a);
  k.doc('info').onSnapshot((doc)=>{
    statusc = doc.data().projectstatus;
    stype = doc.data().servicetype;
  })
    k.doc('progress').onSnapshot((doc) => {
  
     no1 = doc.data().start;
     no2 = doc.data().current;
     no3 = doc.data().end;
  
    document.querySelector('#startRank').innerHTML = `${no1}`;
    document.querySelector('#currentRank').innerHTML = `${no2}`;
    document.querySelector('#endRank').innerHTML = `${no3}`;
  });
  k.doc('info').onSnapshot((snapshot) => {
    if(statusc === 'Active'){
     satinumNumber =  snapshot.data().sentiment;   
    if(satinumNumber == 1){
        document.querySelector('#sentimagechange').src ="senti1.png";
        document.querySelector('.sentitext').innerHTML = "What the F**k is this!!";
        document.querySelector('.sentipercent').innerHTML = "10% SATISFACTION";
        document.getElementById('moodred').className = 'mood1d';
        document.getElementById('moodred').disabled = true;
    }
    else if(satinumNumber == 2){
        document.querySelector('#sentimagechange').src ="senti2.png";
        document.querySelector('.sentitext').innerHTML = "It's a No No for me!";
        document.querySelector('.sentipercent').innerHTML = "20% SATISFACTION";
        document.getElementById('moodred').className = 'mood1';
        document.getElementById('moodred').disabled = false;
    }
    else if(satinumNumber == 3){
        document.querySelector('#sentimagechange').src ="senti3.png";
        document.querySelector('.sentitext').innerHTML = "Not as Good As Expected..";
        document.querySelector('.sentipercent').innerHTML = "30% SATISFACTION";
    }
    else if(satinumNumber == 4){
        document.querySelector('#sentimagechange').src ="senti4.png";
        document.querySelector('.sentipercent').innerHTML = "40% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "Facing Some Issues";
    }
    else if(satinumNumber == 5){
        document.querySelector('#sentimagechange').src ="senti5.png";
        document.querySelector('.sentipercent').innerHTML = "50% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "Neutral";
    }
    else if(satinumNumber == 6){
        document.querySelector('#sentimagechange').src ="senti6.png";
        document.querySelector('.sentipercent').innerHTML = "60% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "Good Service";
    }
    else if(satinumNumber == 7){
        document.querySelector('#sentimagechange').src ="senti7.png";
        document.querySelector('.sentipercent').innerHTML = "70% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "Great, Perfect And Amazing";
    }
    else if(satinumNumber == 8){
        document.querySelector('#sentimagechange').src ="senti8.png";
        document.querySelector('.sentipercent').innerHTML = "80% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "I love this,Would surely recommend";
    }
    else if(satinumNumber == 9){
        document.querySelector('#sentimagechange').src ="senti9.png";
        document.querySelector('.sentipercent').innerHTML = "90% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "I'm so happy with this service";
        document.getElementById('moodinc').className = 'mood2';
        document.getElementById('moodinc').disabled = false;
    }
    else {
        document.querySelector('#sentimagechange').src ="senti10.png";
        document.querySelector('.sentipercent').innerHTML = "100% SATISFACTION";
        document.querySelector('.sentitext').innerHTML = "I'm one Billion percent satisfied with Eezl";
        document.getElementById('moodinc').className = 'mood2d';
        document.getElementById('moodinc').disabled = true;
    };
 
}
  })
  k.doc('progress').onSnapshot((doc)=>{
    document.querySelector('.line-update').style.width = `${doc.data().percentage}%`;
    document.querySelector('#percentageno').innerHTML = doc.data().percentage;
})
 imagesshown()

  }
  function imagesshown(){
    k.doc('uploads').onSnapshot((doc)=>{
      let x = doc.data().sow;
       eezlarray = x;
      x.forEach(element => {
          let appendtext = `<tr>
          <td id="uploadno"></td>
          <td id="projectId" class='${element.imageref}'>${element.imagename}</td>
          <td class="copyIdm"><button class="copyId"><i class='bx bx-play' ></i></button></td>
        </tr>`
        kkkk.insertAdjacentHTML("beforeend", appendtext)
      });
      numbering();
    })
    }

const kkkk = document.querySelector("#mains > main > div.display-info > div.dothings > div.viewp > div > table");
function numbering(){
  let x = document.querySelectorAll("#uploadno");
  for(index =0; index<x.length; index++){
    x[index].innerHTML = index + 1;
  }
}
document.querySelector("#mains > main > div.display-info > div.dothings > div.viewp > div > table").addEventListener('click', (e)=>{
  if(e.target.className === 'copyId'){
      const x = e.target.parentElement.previousElementSibling.className; 
      console.log(x);
      const storageRef = firebase.storage().ref(x);
      storageRef.getDownloadURL().then(function(url) {
        window.open(url, '_blank');
});
}
else if(e.target.className === 'copyIdm'){
const x = e.target.previousElementSibling.className; 
    const storageRef = firebase.storage().ref(x);
    storageRef.getDownloadURL().then(function(url) {
        window.open(url, '_blank');
});
}
else if(e.target.className === 'bx bx-play'){
      const x =e.target.parentElement.parentElement.previousElementSibling.className; 
      console.log(x);
      const storageRef = firebase.storage().ref(x);
      storageRef.getDownloadURL().then(function(url) {
        window.open(url, '_blank');
});
}
})

document.querySelector('.uploadimage').addEventListener('click', ()=>{
  const x = document.querySelector('#imageupload').files;
  if(x[0]){
    const q = x[0].lastModified;
    const w = x[0].name;
      k.doc('uploads').get().then(doc =>{
        return doc.data().sow.length + 1;
      }).then(r =>{

    k.doc('uploads').update({
    sow: firebase.firestore.FieldValue.arrayUnion({imagename:`image${r}`,
  imageref: 'projects/'+w+'--'+q}) })
  document.querySelector('.showloading').style.display = 'flex';
  document.querySelector('.showloading').scrollIntoView();
}).then(()=>{
        //show that its posting
          store.ref('projects/'+w+'--'+q).put(x[0]).then(()=>{
            document.querySelector('.showloading').style.display = 'none';
            document.querySelector('.showsucess').style.display = 'flex';
            document.querySelector('.showsucess').scrollIntoView();
            setTimeout(() => {
              document.querySelector('.showsucess').style.display = 'none';
            }, 5000)
            document.querySelector("#mains > main > div.display-info > div.dothings > div.viewp > div > table").innerHTML = ``;
            imagesshown();
          })

      }).catch((error)=>{
        const m = error.message
        document.querySelector('.showloading').style.display = 'none';
        document.querySelector('.showsucess').style.display = 'none';
        document.querySelector('.showerror').style.display = 'flex';
        document.querySelector('.showerror').innerHTML = m;
        document.querySelector('.showerror').scrollIntoView();
        setTimeout(() => {
          document.querySelector('.showerror').style.display = 'none';
        }, 5000);
      })
    }
})
document.querySelector('.processshow').addEventListener('click', (e)=>{
  if(e.target.className === 'showinfo3'){
  e.target.parentElement.style.display = 'none';}
  else if(e.target.id === "closeshow"){      
      e.target.parentElement.parentElement.style.display = 'none';
  }
})
