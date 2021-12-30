const side = document.querySelector('.side');
const openn = document.querySelector('.open');
const closen = document.querySelector('.close');
var unlist = document.querySelector('#no1');
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
const app = firebase.app();
const auth = firebase.auth();
const dbf = firebase.firestore();

var z;
auth.onAuthStateChanged( user => {
  if (user) {
     z = user.uid;
    document.querySelector('.account').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'flex';
  } else {
    document.querySelector('.account').style.display = 'flex';
    document.querySelector('.dashboard').style.display = 'none';
  }

});

const likee = document.querySelectorAll('#likebutton')



var dbov = {
  All: dbf.collection("market").doc('active').collection('main').where('active', '==', true).orderBy("price" , "asc"),
  Iron: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Iron").where('active', '==', true).orderBy("price" , "asc"),
  Bronze: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Bronze").where('active', '==', true).orderBy("price" , "asc"),
  Silver: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Silver").where('active', '==', true).orderBy("price" , "asc"),
  Gold: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Gold").where('active', '==', true).orderBy("price" , "asc"),
  Platinum: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Platinum").where('active', '==', true).orderBy("price" , "asc"),
  Emerald: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Emerald").where('active', '==', true).orderBy("price" , "asc"),
  Diamond: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Diamond").where('active', '==', true).orderBy("price" , "asc"),
  Master: dbf.collection("market").doc('active').collection('main').where("rank", "==", "Master").where('active', '==', true).orderBy("price" , "asc")

} 
var tval = document.querySelector("#rankfilter").value;
var l = dbov[tval];
document.querySelector("#rankfilter").addEventListener('input', (e) =>{
  const vlgyu = e.target.value;

  tval = vlgyu;
  
  // const kdkb = dbov[vlgyu];

  // if(kdkb === undefined){
  //   console.log('false, try again');
  // }
  // else{
  //   console.log(kdkb);
  //   kdkb.onSnapshot(snapshot =>{
  //     snapshot.docChanges().forEach(element => {
  //       console.log(element.doc.data());
  //     });
  //   })

  // }
  l = dbov[tval];
  unlist.innerHTML = ``;
  gt();
})
var lastelement = 0; 

function gt(){
  l.limit(25).onSnapshot((snapshot) => {
    snapshot.docChanges().forEach( element => {
      if(element.type === 'added'){
        let direc = element.doc.data()
        let hc = `<li class="pll">
        <div class="pll_top">
        <p>Account Info</p>
      </div>
      <div class="main_content">
          <p>RANK: ${direc.rank}</p>
          <p>DIVISION: ${direc.division}</p>
          <p>MARK: ${direc.mark}</p>
          <p>MATCHES WON: ${direc.matcheswon}</p>
      </div>
      <div class="viewmore">
      <div class="vmb" id='${element.doc.id}'><i class="fas fa-arrow-right"></i></div>
      </div>
      </li>`
      
      unlist.insertAdjacentHTML('afterbegin', hc);
    }
    })
    lastelement = snapshot.docs[snapshot.docs.length - 1];
  })
}
gt();
  function showmore(){
    const moreref = l.startAfter(lastelement).limit(25);
    moreref.onSnapshot(snapshot =>{
      snapshot.docChanges().forEach(element =>{
        if(element.type === 'added'){
          let direc = element.doc.data();

          let hc = `<li class="pll">
          <div class="pll_top">
          <p>Account Info</p>
          </div>
          <div class="main_content">
          <p>RANK: ${direc.rank}</p>
          <p>DIVISION: ${direc.division}</p>
          <p>MARK: ${direc.mark}</p>
          <p>MATCHES WON: ${direc.matcheswon}</p>
          </div>
          <div class="viewmore">
          <div class="vmb" id='${element.id}'><i class="fas fa-arrow-right"></i></div>
          </div>
          </li>`
          
          unlist.insertAdjacentHTML('beforeend', hc);
        }
      })
      lastelement = snapshot.docs[snapshot.docs.length - 1];
    })

    l.onSnapshot(snapshot =>{
      if(document.querySelectorAll(".pll").length >= (snapshot.size) ){
        document.querySelector(".pagi").style.display = 'none'
      }
      else{
        document.querySelector(".pagi").style.display = 'block'
      }
    })

  }
var openid;
  document.querySelector('.buyaccount').addEventListener('click', ()=>{
    document.querySelector('.payment').style.display = 'flex';
    document.querySelector('.payment').scrollIntoView();
  })
  document.querySelector('.closesect').addEventListener('click', ()=>{
    document.querySelector('.payment').style.display = 'none';
  })
  document.querySelector('.closegtact').addEventListener('click', ()=>{
    document.querySelector('.gtact').style.display ='none'
    document.querySelector('main').style.display = 'block'
  })

  // document.querySelector("#pic2").firstElementChild.src
  document.querySelector('#no1').addEventListener('click', (e)=>{
    if(e.target.className === 'vmb'){
        openid = e.target.id;
        document.querySelector('.gtact').style.display ='block';
        document.querySelector('main').style.display = 'none'
        console.log(openid);
        addinfo(openid);

      
      
    }
    else if(e.target.className === 'fas fa-arrow-right'){
      let x=e.target.parentElement;
        openid = x.id;
        document.querySelector('.gtact').style.display ='block';
        document.querySelector('main').style.display = 'none'
        console.log(openid);
        addinfo(openid);
    }
  })


  var a;
  var b;
  var c;
  var d;
  var e; 
  var f;
  var g;
  var h;
  var i;

  let currentprice;
  function addinfo(id){
    let j;
    let k;
    let l;
    dbf.collection('market').doc('active').collection('main').doc(id).get().then((doc)=>{
      let x = doc.data();
      document.querySelector('#rank').innerHTML = x.rank;
      document.querySelector('#division').innerHTML = x.division;
      document.querySelector('#mark').innerHTML = x.mark;
      document.querySelector('#matcheswon').innerHTML = x.matcheswon;
      document.querySelector('#region').innerHTML = x.region;
      document.querySelector('#skin').innerHTML = x.skin;
      document.querySelector('#champions').innerHTML = x.champions;
      document.querySelector('#price').innerHTML = '$'+x.price;
      a = x.rank;
      b = x.division;
      c = x.mark;
      d = x.matcheswon;
      e = x.region;
      f = x.skin;
      g = x.champions;
      h = x.price;
      currentprice = x.price
      j = x.pic1,
      k = x.pic2,
      l = x.pic3
      
    }).then(()=>{
      firebase.storage().ref("accountmarket/"+j).getDownloadURL().then(function(url) {
      document.querySelector('#pic1').firstElementChild.src = url;
      document.querySelector('#imageshown').src = url;
})

    }).then(()=>{
      firebase.storage().ref("accountmarket/"+k).getDownloadURL().then(function(url) {
      document.querySelector('#pic2').firstElementChild.src = url;
})

    }).then(()=>{
      firebase.storage().ref("accountmarket/"+l).getDownloadURL().then(function(url) {
      document.querySelector('#pic3').firstElementChild.src = url;
})

    })
    
  }
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: currentprice
          }
        }]
      })
    },
    onApprove:function(data, actions) {
        return actions.order.capture().then(function (details){
            if (details.status){
                   dbf.collection('accountbought').doc(z).collection('accouts').add({
                    rank: a,
                    division: b,
                    mark: c,
                    matcheswon: d,
                    region: e,
                    skin: f,
                    champions: g,
                    price: h,
                    transitioninfo: details
                   })
                   .then(()=>{
                    dbf.collection('market').doc('active').collection('main').doc(openid).update({
                      active: false,
                      useridb: z
                    })
                   }).then(()=>{
                    document.querySelector('.paydiv').style.display = 'none';
                    document.querySelector('.confirm').style.display = 'block';
                   })
                   .catch((error)=>{
                     console.log(error.message);
                   })
                
            }
            else{
                document.querySelector('.paydiv').style.display = 'none';
                document.querySelector('.confirmerror').style.display = 'block';              
            }
        })
    }
  }).render('#paypal-btn-container');



  dbf.collection('market').doc('active').collection('main').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
            gt();
                    }
    });
});
document.querySelector('.imageclickcont').addEventListener('click', (e)=>{

  if(e.target.className === 'imageclick'){
    let x = e.target.firstElementChild.src;
    document.querySelector('#imageshown').src = x;

  }
  else if(e.target.className === 'tinyboys'){
    let x = e.target.src;
    document.querySelector('#imageshown').src = x;

  }
  
})
