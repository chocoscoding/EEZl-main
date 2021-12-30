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
//   const app = firebase.app();
  const auth = firebase.auth();
  const dbf = firebase.firestore();
//   const db = firebase.database();
  const form = document.querySelector('#submit-msg');
  dbf.settings({timestampsInSnapshots: true , merge: true});

  const chatdispaly = document.querySelector('#msgcul');  

 var userm;
  let userId;
  let satinumNumber;
  
  const localstorageforproject = localStorage.getItem('projectid')
  var no1;
  var no2;
  var no3;
  var stype;

  auth.onAuthStateChanged( user => {
    if (user) {
      
      userm = user.email;
      userId = user.uid;

    } else {
      window.location.replace("login.html");
    }
  
  });
  let v = localStorage.getItem('userid');
let w = localStorage.getItem('projectId');
var statusc;
  const k = dbf.collection('projects').doc(v).collection(w);

  k.doc('info').onSnapshot((doc)=>{
    statusc = doc.data().projectstatus;
    stype = doc.data().servicetype;
  })

  
  function increaseSent(){

    k.doc('info').update({
        sentiment:  satinumNumber + 1 
    })
    
}
  function reduceSent(){

    k.doc('info').update({
        sentiment:  satinumNumber - 1 
    })
    
}
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

  function closerprogress(){
      document.querySelector('.update-progress').style.display = 'none';
    }
    function updateprogressopen(){
        document.querySelector('.update-progress').style.display = 'block';
        ccrau(stype, no2, no3);

    }
    

  const process1 = [
      'IronIV - 0 Mark',
      'IronIV - 1 Mark',
      'IronIV - 2 Marks',
      'IronIII - 0 Mark',
      'IronIII - 1 Mark',
      'IronIII - 2 Marks',
      'IronII - 0 Mark',
      'IronII - 1 Mark',
      'IronII - 2 Marks',
    'IronI - 0 Mark',
    'IronI - 1 Mark',
    'IronI - 2 Marks',
    'BronzeIV - 0 Mark',
    'BronzeIV - 1 Mark',
    'BronzeIV - 2 Marks',
    'BronzeIV - 3 Marks',
    'BronzeIII - 0 Mark',
    'BronzeIII - 1 Mark',
    'BronzeIII - 2 Marks',
    'BronzeIII - 3 Marks',
    'BronzeII - 0 Mark',
    'BronzeII - 1 Mark',
    'BronzeII - 2 Marks',
    'BronzeII - 3 Marks',
    'BronzeI - 0 Mark',
    'BronzeI - 1 Mark',
    'BronzeI - 2 Marks',
    'BronzeI - 3 Marks',
    'SilverIV - 0 Mark',
    'SilverIV - 1 Mark',
    'SilverIV - 2 Marks',
    'SilverIV - 3 Marks',
    'SilverIII - 0 Mark',
    'SilverIII - 1 Mark',
    'SilverIII - 2 Marks',
    'SilverIII - 3 Marks',
    'SilverII - 0 Mark',
    'SilverII - 1 Mark',
    'SilverII - 2 Marks',
    'SilverII - 3 Marks',
    'SilverI - 0 Mark',
    'SilverI - 1 Mark',
    'SilverI - 2 Marks',
    'SilverI - 3 Marks',
    'GoldIV - 0 Mark',
    'GoldIV - 1 Mark',
    'GoldIV - 2 Marks',
    'GoldIV - 3 Marks',
    'GoldIV - 4 Marks',
    'GoldIII - 0 Mark',
    'GoldIII - 1 Mark',
    'GoldIII - 2 Marks',
    'GoldIII - 3 Marks',
    'GoldIII - 4 Marks',
    'GoldII - 0 Mark',
    'GoldII - 1 Mark',
    'GoldII - 2 Marks',
    'GoldII - 3 Marks',
    'GoldII - 4 Marks',
    'GoldI - 0 Mark',
    'GoldI - 1 Mark',
    'GoldI - 2 Marks',
    'GoldI - 3 Marks',
    'GoldI - 4 Marks',
    'PlatinumIV - 0 Mark',
    'PlatinumIV - 1 Mark',
    'PlatinumIV - 2 Marks',
    'PlatinumIV - 3 Marks',
    'PlatinumIV - 4 Marks',
    'PlatinumIII - 0 Mark',
    'PlatinumIII - 1 Mark',
    'PlatinumIII - 2 Marks',
    'PlatinumIII - 3 Marks',
    'PlatinumIII - 4 Marks',
    'PlatinumII - 0 Mark',
    'PlatinumII - 1 Mark',
    'PlatinumII - 2 Marks',
    'PlatinumII - 3 Marks',
    'PlatinumII - 4 Marks',
    'PlatinumI - 0 Mark',
    'PlatinumI - 1 Mark',
    'PlatinumI - 2 Marks',
    'PlatinumI - 3 Marks',
    'PlatinumI - 4 Marks',
    'EmeraldIV - 0 Mark',
    'EmeraldIV - 1 Mark',
    'EmeraldIV - 2 Marks',
    'EmeraldIV - 3 Marks',
    'EmeraldIV - 4 Marks',
    'EmeraldIV - 5 Marks',
    'EmeraldIII - 0 Mark',
    'EmeraldIII - 1 Mark',
    'EmeraldIII - 2 Marks',
    'EmeraldIII - 3 Marks',
    'EmeraldIII - 4 Marks',
    'EmeraldIII - 5 Marks',
    'EmeraldII - 0 Mark',
    'EmeraldII - 1 Mark',
    'EmeraldII - 2 Marks',
    'EmeraldII - 3 Marks',
    'EmeraldII - 4 Marks',
    'EmeraldII - 5 Marks',
    'EmeraldI - 0 Mark',
    'EmeraldI - 1 Mark',
    'EmeraldI - 2 Marks',
    'EmeraldI - 3 Marks',
    'EmeraldI - 4 Marks',
    'EmeraldI - 5 Marks',
    'DiamondIV - 0 Mark',
    'DiamondIV - 1 Mark',
    'DiamondIV - 2 Marks',
    'DiamondIV - 3 Marks',
    'DiamondIV - 4 Marks',
    'DiamondIV - 5 Marks',
    'DiamondIII - 0 Mark',
    'DiamondIII - 1 Mark',
    'DiamondIII - 2 Marks',
    'DiamondIII - 3 Marks',
    'DiamondIII - 4 Marks',
    'DiamondIII - 5 Marks',
    'DiamondII - 0 Mark',
    'DiamondII - 1 Mark',
    'DiamondII - 2 Marks',
    'DiamondII - 3 Marks',
    'DiamondII - 4 Marks',
    'DiamondII - 5 Marks',
    'DiamondI - 0 Mark',
    'DiamondI - 1 Mark',
    'DiamondI - 2 Marks',
    'DiamondI - 3 Marks',
    'DiamondI - 4 Marks',
    'DiamondI - 5 Marks',
    'MasterIV - 0',
    'MasterIII - 0',
    'MasterII - 0',
    'MasterI - 0',
  ];
  const process2 = [
      '0 win',
      '1 win',
      '2 wins',
      '3 wins',
      '4 wins',
      '5 wins',
      '6 wins',
      '7 wins',
      '8 wins',
      '9 wins',
      '10 wins',
      '11 win',
      '12 wins',
      '13 wins',
      '14 wins',
      '15 wins'
  ]
  const process3 =[
    '0 win',
    '1 win',
    '2 wins',
    '3 wins',
    '4 wins',
    '5 wins',
    '6 wins',
    '7 wins',
    '8 wins',
    '9 wins',
    '10 wins',
    '11 wins',
    '12 wins',
    '13 wins',
    '14 wins',
    '15 wins',
    '16 wins',
    '17 wins',
    '18 wins',
    '19 wins',
    '20 wins',
    '21 wins',
    '22 wins',
    '23 wins',
    '24 wins',
    '25 wins',
    '26 wins',
    '27 wins',
    '28 wins',
    '29 wins',
    '30 wins'
  ]

//check currentt rank and upgrade it
  function ccrau(servicetype, currentrank, desiredrank){
      if(servicetype === 'Rank Boosting'){
          const  no = process1.indexOf(currentrank);
          const  newrankno = no + 1;
          const  newrank =  process1[newrankno];
          const desiredrankno = process1.indexOf(desiredrank) ;
          const newpercent = Math.round((newrankno/ desiredrankno) * 100);
          let x = newpercent;
          if(newpercent > 100){
               x = 100
          }
          else if(newpercent<0){
              x=0
          }
          sessionStorage.setItem('eezlnewrank', newrank);
          sessionStorage.setItem('eezlnewpercent', x);
          document.querySelector("#mains > main > div.update-progress > div > p").innerHTML = `${currentrank} <b>to</b>  ${newrank}`
      }
      else if (servicetype === 'Ranked Wins'){
        const  no = process2.indexOf(currentrank);
        const  newrankno = no + 1;
        const  newrank =  process2[newrankno];
        const desiredrankno = process2.indexOf(desiredrank) ;
        const newpercent = Math.round((newrankno/ desiredrankno) * 100);
        let x = newpercent;
        if(newpercent > 100){
             x = 100
        }
        else if(newpercent<0){
            x=0
        }
        sessionStorage.setItem('eezlnewrank', newrank);
        sessionStorage.setItem('eezlnewpercent', x);
        document.querySelector("#mains > main > div.update-progress > div > p").innerHTML = `${currentrank} <b>to</b>  ${newrank}`
    }
    else {
        const  no = process3.indexOf(currentrank);
        const  newrankno = no + 1;
        const  newrank =  process3[newrankno];
        const desiredrankno = process3.indexOf(desiredrank) ;
        const newpercent = Math.round((newrankno/ desiredrankno) * 100);
        let x = newpercent;
        if(newpercent > 100){
             x = 100
        }
        else if(newpercent<0){
            x=0
        }
        sessionStorage.setItem('eezlnewrank', newrank);
        sessionStorage.setItem('eezlnewpercent', x);
        document.querySelector("#mains > main > div.update-progress > div > p").innerHTML = `${currentrank} <b>to</b>  ${newrank}` 
    }
  }
  document.querySelector('#updaterprogress').addEventListener('click', ()=>{
      const showsucess = document.querySelector('.showsucess')
      const showerror = document.querySelector('.showerror');
      const show = document.querySelector('.showloading')
      show.style.display = 'flex';
    k.doc('progress').update({
        percentage: sessionStorage.getItem('eezlnewpercent'),
        current: sessionStorage.getItem('eezlnewrank')
    }).then(()=>{
        show.style.display = 'none'
        showsucess.style.display = 'flex'
        setInterval(() => {
            showsucess.style.display = 'none'
        }, 8900);
        document.querySelector("#mains > main > div.update-progress").style.display = 'none'
    }).catch((err)=>{
        show.style.display = 'none'
        showerror.style.display = 'flex'
        console.log(err.message);
    })
  })
  k.doc('progress').onSnapshot((doc)=>{
      const x = doc.data();
      const f = document.querySelector("#mains > main > div.display-info > div.timeline > div.rank-update > button")
      const y = x.current;
      const z = x.end;
      const y1 = process1.indexOf(y);
      const z1 =process1.indexOf(z);
      if(y1 >= z1){
          f.disabled = true;
          f.style.display ='none'
      }
  })

  document.querySelector('.processshow').addEventListener('click', (e)=>{
      if(e.target.className === 'showinfo3'){
      e.target.parentElement.style.display = 'none';}
      else if(e.target.id === "closeshow"){      
          e.target.parentElement.parentElement.style.display = 'none';
      }
  })

  
  k.doc('progress').onSnapshot((doc) => {
  
     no1 = doc.data().start;
     no2 = doc.data().current;
     no3 = doc.data().end;
  
    document.querySelector('#startRank').innerHTML = `${no1}`;
    document.querySelector('#currentRank').innerHTML = `${no2}`;
    document.querySelector('#endRank').innerHTML = `${no3}`;
  });

  k.doc('info').onSnapshot((doc) => {

    let no1 = doc.data().boosterrating;
    const star1 = document.querySelector('#star1');
    const star2 = document.querySelector('#star2');
    const star3 = document.querySelector('#star3');
    const star4 = document.querySelector('#star4');
    const star5 = document.querySelector('#star5');
    const ratingtxt = document.querySelector('#ratingtxt');
    switch(no1){
        case 1:

            ratingtxt.innerHTML = 'Oh no!!! What went wrong';
            star1.className = 'bx bxs-star';
            star1.style.color = 'rgb(9, 7, 36)';
            star2.className = 'bx bx-star';
            star3.className = 'bx bx-star';
            star4.className = 'bx bx-star';
            star5.className = 'bx bx-star';
            star2.style.color = 'rgba(21, 20, 49, 0.573)';
            star3.style.color = 'rgba(21, 20, 49, 0.573)';
            star4.style.color = 'rgba(21, 20, 49, 0.573)';
            star5.style.color = 'rgba(21, 20, 49, 0.573)';
            break;
        case 2:
            ratingtxt.innerHTML = 'Any problem? Report immideately';
            star1.className = 'bx bxs-star';
            star2.className = 'bx bxs-star';
            star1.style.color = 'rgb(9, 7, 36)';
            star2.style.color = 'rgb(9, 7, 36)';
            star3.className = 'bx bx-star';
            star4.className = 'bx bx-star';
            star5.className = 'bx bx-star';
            star3.style.color = 'rgba(21, 20, 49, 0.573)';
            star4.style.color = 'rgba(21, 20, 49, 0.573)';
            star5.style.color = 'rgba(21, 20, 49, 0.573)';
            break;
        case 3:
            ratingtxt.innerHTML = 'We would do better next time';
            star1.className = 'bx bxs-star';
            star2.className = 'bx bxs-star';
            star3.className = 'bx bxs-star';
            star1.style.color = 'rgb(9, 7, 36)';
            star3.style.color = 'rgb(9, 7, 36)';
            star2.style.color = 'rgb(9, 7, 36)';
            star4.className = 'bx bx-star';
            star5.className = 'bx bx-star';
            star4.style.color = 'rgba(21, 20, 49, 0.573)';
            star5.style.color = 'rgba(21, 20, 49, 0.573)';
            break;
        case 4:
            ratingtxt.innerHTML = `OMG, that's crazy!`;
            star1.className = 'bx bxs-star';
            star2.className = 'bx bxs-star';
            star3.className = 'bx bxs-star';
            star4.className = 'bx bxs-star';
            star5.className = 'bx bx-star';
            star1.style.color = 'rgb(9, 7, 36)';
            star3.style.color = 'rgb(9, 7, 36)';
            star2.style.color = 'rgb(9, 7, 36)';
            star4.style.color = 'rgb(9, 7, 36)';
            star5.style.color = 'rgba(21, 20, 49, 0.573)';
            break;
        case 5:
            ratingtxt.innerHTML = 'Wow, Your booster is really happy with that..';
            star1.className = 'bx bxs-star';
            star2.className = 'bx bxs-star';
            star3.className = 'bx bxs-star';
            star4.className = 'bx bxs-star';
            star5.className = 'bx bxs-star';
            star1.style.color = 'rgb(21, 19, 47)';
            star2.style.color = 'rgb(21, 19, 47)';
            star3.style.color = 'rgb(21, 19, 47)';
            star4.style.color = 'rgb(21, 19, 47)';
            star5.style.color = 'rgb(21, 19, 47)';
            break;  
    }
 });
 function closerbstr() {
     document.querySelector('.ratebooster').style.display = 'none';
    }
    function openrbstr() {
        document.querySelector('.ratebooster').style.display = 'block';
        document.querySelector('.tipbooster').style.display = 'none';
        document.querySelector('.complain').style.display = 'none'
        document.querySelector('.ratebooster').scrollIntoView();
    }
    function closetbstr() {
        document.querySelector('.tipbooster').style.display = 'none';
        document.querySelector('#paypal-btn-container').style.display = 'none';
    }
    function opentbstr() {
     document.querySelector('.tipbooster').style.display = 'block';
     document.querySelector('.ratebooster').style.display = 'none';
     document.querySelector('.complain').style.display = 'none'
     document.querySelector('.tipbooster').scrollIntoView();


 }
 document.querySelector('.rating-box').addEventListener('click', (e) =>{
   let pick = e.target.id;
   switch (pick){
       case 'star1':
           k.doc('info').update({
            boosterrating:  1 
        });
        break;
       case 'star2':
           k.doc('info').update({
            boosterrating:  2 
        });
        break;
       case 'star3':
           k.doc('info').update({
            boosterrating:  3 
        });
        break;
       case 'star4':
           k.doc('info').update({
            boosterrating:  4 
        });
        break;
       case 'star5':
           k.doc('info').update({
            boosterrating:  5 
        });
        break;
   }

 });

 k.doc('progress').onSnapshot((doc)=>{
     document.querySelector('.line-update').style.width = `${doc.data().percentage}%`;
     document.querySelector('#percentageno').innerHTML = doc.data().percentage;
 })

function paytip() {
     const tipamount = document.querySelector('#tipamount').value;
     document.querySelector('#paypal-btn-container').style.display = 'block';
     return tipamount;

 }; 
 let jjk;
     paypal.Buttons({
        createOrder: function(data, actions) {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: paytip()
              }
            }]
          });
        },
        onApprove:function(data, actions) {
            return actions.order.capture().then(function (details){
                console.log(details);
                console.log(details.create_time);
                console.log(details.purchase_units[0].amount.value);
                console.log(details.purchase_units[0].amount.currency_code);
                if (details.status){
                           let y =  Number(details.purchase_units[0].amount.value)
                            k.doc('info').update({
                                tips: y,
                                tip: details
                            }).catch((err)=>{
                                document.querySelector('.showerror').style.display = 'flex'
                                document.querySelector('.showerror').scrollIntoView();
                                setTimeout(() => {
                                    document.querySelector('.showerror').style.display = 'none'
                                }, 9000);
                                console.log(err.message);
                            })
                }
                else{
                    document.getElementById('open1').style.display = 'none';
                    document.getElementById('open2').style.display = 'none';
                    document.getElementById('open3').style.display = 'block';              
                    console.log('detailsnotstatus'); 
                }
            })
        }
      }).render('#paypal-btn-container');





var eezlarray;
const kkkk = document.querySelector("#mains > main > div.dothings > div.viewp > div > table");
k.doc('uploads').onSnapshot((doc)=>{
    let x = doc.data().sow;
     eezlarray = x;
    x.forEach(element => {
        let appendtext = `<tr>
        <td id="uploadno">N0.1</td>
        <td id="projectId">${element.imageref}</td>
        <td class="copyIdm"><button class="copyId"><i class='bx bx-play' ></i></button></td>
      </tr>`
      kkkk.insertAdjacentHTML("beforeend", appendtext)
    });
    numbering();
})
function numbering(){
    let x = document.querySelectorAll("#uploadno");
    for(index =0; index<x.length; index++){
      x[index].innerHTML = index + 1;
    }
  }
  document.querySelector("#mains > main > div.dothings > div.viewp > div > table").addEventListener('click', (e)=>{
      if(e.target.className === 'copyId'){
          const x = e.target.parentElement.previousElementSibling.innerHTML; 
          console.log(x);
          const storageRef = firebase.storage().ref(x);
          storageRef.getDownloadURL().then(function(url) {
            window.open(url, '_blank');
  });
}
else if(e.target.className === 'copyIdm'){
    const x = e.target.previousElementSibling.innerHTML; 
        const storageRef = firebase.storage().ref(x);
        storageRef.getDownloadURL().then(function(url) {
            window.open(url, '_blank');
  });
}
else if(e.target.className === 'bx bx-play'){
          const x =e.target.parentElement.parentElement.previousElementSibling.innerHTML; 
          console.log(x);
          const storageRef = firebase.storage().ref(x);
          storageRef.getDownloadURL().then(function(url) {
            window.open(url, '_blank');
  });
}
  })


  document.querySelector('.submitcomplain').addEventListener('click', ()=>{
      document.querySelector('.statusz').innerHTML ='Loading...';
      document.querySelector('.statusz').style.display = 'block';
      document.querySelector('.submitcomplain').style.display = 'none';
      document.querySelector('.complainttext').style.display = 'none';
      document.querySelector('#comptc').style.display = 'none';
      dbf.collection('comp').add({
          userid: v,
          projectid: w,
          complain: document.querySelector('.complainttext').value
        }).then(()=>{
            document.querySelector('.statusz').style.display = 'block';
            document.querySelector('.statusz').innerHTML ='Submitted sucessfully, we would Contact you soon';
        }).catch((error)=>{
            document.querySelector('.statusz').style.display = 'block';
          document.querySelector('.statusz').innerHTML = error.message;
      })
  })
  document.querySelector('.fac').addEventListener('click', ()=>{
      document.querySelector('.complain').style.display = 'flex'
      document.querySelector('.submitcomplain').style.display = 'block';
      document.querySelector('.complainttext').style.display = 'block';
      document.querySelector('#comptc').style.display = 'block';
      document.querySelector('.ratebooster').style.display = 'none';
      document.querySelector('.tipbooster').style.display = 'none';
      document.querySelector('.complain').scrollIntoView();
    })
    function closecomp(){
      document.querySelector('.complain').style.display = 'none'

  }