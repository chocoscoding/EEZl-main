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
const auth = firebase.auth();
const dbf = firebase.firestore();
let z;
function gen (){
    let today = new Date();
    
    let date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
    
    let time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    
    let dateTime = date+'#'+time;
    return dateTime;

}
function rand() {
    return Math.random().toString(24).substr(2); // remove `0.`
};

function token() {
    return gen() + rand(); // to make it longer
};

auth.onAuthStateChanged( user => {
    z=user.uid;
  if (user) {
    document.querySelector('.account').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'flex';
  } else {
    console.log('not logged in');
    document.querySelector('.account').style.display = 'flex';
    document.querySelector('.dashboard').style.display = 'none';
  }

});
let rbaddons = [];
function iop(){
    // console.log(document.querySelector('#s1').children)
    let j =document.querySelector('#s1').children;
    let k = document.querySelector('#s1').childElementCount - 1;
    rbaddons = []
    for (let i = 0; i < k; i++) {
        const element = j[i].lastElementChild.firstElementChild.nextSibling;
        rbaddons.push(element.textContent)
    }

}
let rwaddons = [];
function iop3(){
    let j =document.querySelector('#s3').children;
    let k = document.querySelector('#s3').childElementCount - 1;
    rwaddons = []
    for (let i = 0; i < k; i++) {
        const elementcheck = j[i].firstElementChild.checked;
        const element = j[i].lastElementChild.firstElementChild.nextSibling;
        if(elementcheck){
            rwaddons.push(element.textContent) 
         }        
    }

}
// let placementaddons = [];
// function iop2(){
//     let j =document.querySelector('#s2').children;
//     let k = document.querySelector('#s2').childElementCount - 1;
//     placementaddons = []
//     for (let i = 0; i < k; i++) {
//         const elementcheck = j[i].firstElementChild.checked;
//         const element = j[i].lastElementChild.firstElementChild.nextSibling;
//         if(elementcheck){
//             placementaddons.push(element.textContent) 
//         }        
//     }
// }
let normaladdons = [];
function iop4(){
    let j =document.querySelector("#s4").children;
    let k = document.querySelector("#s4").childElementCount - 1;
    normaladdons = []
    for (let i = 0; i < k; i++) {
        const elementcheck = j[i].firstElementChild.checked;
        const element = j[i].lastElementChild.firstElementChild.nextSibling;
        if(elementcheck){
            normaladdons.push(element.textContent) 
        }        
        
    }
}
const rbmark = document.querySelector("#Mark-no1").value;
const rbdevice = document.querySelector("#device").value;
const rblocation = document.querySelector("#location").value
const gameusername = document.querySelector('#gameusername').value;
const gamepassword = document.querySelector('#gamepassword').value;
const sevicetype = document.querySelector(".wrbutton.active")
// console.log(tt,tt3,ttrw,ttrt2)
//Ranked Boosting

//the service type = servicetype.textContent
//current rank = crst
//curretdivision = csst
//current mark = rbmark
//device = rbdevice
//desired location =rblocation
//desired rank = drst
//desired devision = dsst`
//addons = rbaddons
//price =rbprice

//gameusername
//gamepassword
//controlpath 
//userid


//Ranked wins
//rankedwinsrank = csst_crr
//rankedwins-division = csst_cpr
//no of games = document.querySelector("#myRange2")
//price paid = rwprice
//addons = rwaddons
// rwtime
// csst_cprmark
// rbtime
// normaldate

//Placements
//placementdevice = document.querySelector("#placementdevice")
//placementlocation = document.querySelector("#placementlocation")
//numberofgame = document.querySelector("#myRange").value
//addons = placementaddons
//price = ppt

//Normals
//numberofgames = document.querySelector("#myRange3").value
//device = document.querySelector("#normaldevice").value
//loaction = document.querySelector("#normallocation").value
//price = document.querySelector(".totalText4").textContent
//addons = normaladdon


var ftoken;

function wrservicePodt(){
    let mainkey = document.querySelector('.wrbutton.active').textContent;
    switch (mainkey) {
        case 'Rank Boosting':
           ftoken = token()
        dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
            name: mainkey
        })
        .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('progress').set({
            start: `${crst}${csst} - ${rbmark}`,
            current: `${crst}${csst} - ${rbmark}`, 
            end: `${drst}${dsst} - ${rbmark || '0'}`
        })}).then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('chat').collection('main').add({})})
        .then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('complaints').set({})})
        .then(()=>dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
            boosterrating: 5,
            boosterusernames:'none',
            projectstatus: 'notactive',
            projectcost: gp,
            sentiment: 10,
            tips: 'none',
            endofservice: new Date(firebase.firestore.Timestamp.now().seconds*1000 + (rbtime * 86400000))
        }))
        .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('uploads').set({
            i: 'imageloc',
            sow: []
        })})
        .then(() =>{
            iop();
            dbf.collection('market').doc('bjobs').collection('jobs').add({
            addon:rbaddons,
            currentdivision: csst,
            currentmark: rbmark,
            currentrank: crst,
            dec: drst,
            desireddivision: dsst,
            desiredrank: drst,
            device: rbdevice,
            directory: {z: z, ftoken: ftoken},
            productno: Math.floor(Math.random()*10000000000000),
            toppriority: true,
            serviceType: mainkey,
            pay: gp * 0.75,
            istaken: false,
            gameusername: gameusername,
            gamepassword: gamepassword
        })})
        .then(()=>{dbf.collection('proid').doc(z).collection('main').add({
            projectId: ftoken,
            time: rbtime
        })})
        .then(()=>{
            console.log('done')
        })   
            break;
        case 'Ranked Wins':
            ftoken = token()
            dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
                name: mainkey
            })
            .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('progress').set({
                start: `0 win`,
                current: `0 win`, 
                end: document.querySelector("#myRange2").value + 'wins'
            })}).then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('chat').collection('main').add({})})
            .then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('complaints').set({})})
            .then(()=>dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
                boosterrating: 5,
                boosterusernames:'none',
                projectstatus: 'notactive',
                projectcost: gp,
                sentiment: 10,
                tips: 'none',
                endofservice: new Date(firebase.firestore.Timestamp.now().seconds*1000 + (rwtime * 86400000))
            }))
            .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('uploads').set({
                i: 'imageloc',
                sow: []
            })})
            .then(() =>{
                iop();
                dbf.collection('market').doc('bjobs').collection('jobs').add({
                addon:rbaddons,
                currentdivision: csst_cpr,
                currentmark: csst_cprmark,
                currentrank: csst_crr,
                directory: {z: z, ftoken: ftoken},
                productno: Math.floor(Math.random()*10000000000000),
                toppriority: true,
                serviceType: mainkey,
                pay: gp * 0.75,
                istaken: false,
                gameusername: gameusername,
                gamepassword: gamepassword
            })})
            .then(()=>{dbf.collection('proid').doc(z).collection('main').add({
                projectId: ftoken,
                time: rwtime
            })})
            .then(()=>{
                console.log('done')
            })   
                
            break;
        case 'Normals':
            ftoken = token()
            dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
                name: mainkey
            })
            .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('progress').set({
                start: `0 win`,
                current: `0 win`, 
                end: document.querySelector("#myRange3").value + ' wins'
            })}).then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('chat').collection('main').add({})})
            .then(()=>{dbf.collection('projects').doc(z).collection(ftoken).doc('complaints').set({})})
            .then(()=>dbf.collection('projects').doc(z).collection(ftoken).doc('info').set({
                boosterrating: 5,
                boosterusernames:'none',
                projectstatus: 'notactive',
                projectcost: gp,
                sentiment: 10,
                tips: 'none',
                endofservice: new Date(firebase.firestore.Timestamp.now().seconds*1000 + (normaldate * 86400000))
            }))
            .then(()=> {dbf.collection('projects').doc(z).collection(ftoken).doc('uploads').set({
                i: 'imageloc',
                sow: []
            })})
            .then(() =>{
                iop();
                dbf.collection('market').doc('bjobs').collection('jobs').add({
                addon:normaladdon,
                numberofgames: document.querySelector("#myRange3").value,
                location: document.querySelector("#normallocation").value,
                device: document.querySelector("#normaldevice").value,
                directory: {z: z, ftoken: ftoken},
                productno: Math.floor(Math.random()*10000000000000),
                toppriority: true,
                serviceType: mainkey,
                pay: gp * 0.75,
                istaken: false,
                gameusername: gameusername,
                gamepassword: gamepassword
            })})
            .then(()=>{dbf.collection('proid').doc(z).collection('main').add({
                projectId: ftoken,
                time: new Date(firebase.firestore.Timestamp.now().seconds*1000 + (normaldate * 86400000))
            })})
            .then(()=>{
                console.log('done')
            })   
            break;
    }
}

var t1 = performance.now();
function pre(){
    //hide the preloader
    document.querySelector(".pre").style.display = "none";
}


const mark3 = document.querySelector('.marks3');
const mark4 = document.querySelector('.marks4');
const mark5 = document.querySelector('.marks5');
const mark3b = document.querySelector('.marks3b');
const mark4c = document.querySelector('.marks4c');
const mark5d = document.querySelector('.marks5d');

const input3 = document.getElementById('input3');
const input3a = document.getElementById('inputp3a');
function Iron() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Iron";
    document.getElementById('mark-c').className = "mark-Iron"
    document.getElementById("clickedRank").innerHTML = "Iron"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'none';
    mark4.style.display = 'none';
    mark5.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Iron"; 
}
function bronze() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Bronze";
    document.getElementById('mark-c').className = "mark-Bronze"
    document.getElementById("clickedRank").innerHTML = "Bronze"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'none';
    mark5.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Bronze"; 
    
}

function Silver() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Silver";
    document.getElementById('mark-c').className = "mark-Silver"
    document.getElementById("clickedRank").innerHTML = "Silver"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'none';
    mark5.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Silver"; 
}

function Gold() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Gold";
    document.getElementById('mark-c').className = "mark-Gold"
    document.getElementById("clickedRank").innerHTML = "Gold"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'inline-block';
    mark5.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Gold"; 
}

function Platinum() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Platinum";
    document.getElementById('mark-c').className = "mark-Platinum"
    document.getElementById("clickedRank").innerHTML = "Platinum"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'inline-block';
    mark5.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Platinum"; 
}

function Emerald() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Emerald";
    document.getElementById('mark-c').className = "mark-Emerald"
    document.getElementById("clickedRank").innerHTML = "Emerald"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'inline-block';
    mark5.style.display = 'inline-block';
    // document.getElementById("totalText2").innerHTML = "Emerald"; 
}

function Diamond() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Diamond";
    document.getElementById('mark-c').className = "mark-Diamond"
    document.getElementById("clickedRank").innerHTML = "Diamond"; 
    input3.style.display = 'inline-block';
    mark3.style.display = 'inline-block';
    mark4.style.display = 'inline-block';
    mark5.style.display = 'inline-block';
    // document.getElementById("totalText2").innerHTML = "Diamond"; 
}

function Master() {
    document.getElementById('serviceMainInner').className = "service-main-inner-Master";
    document.getElementById('mark-c').className = "mark-Master"
    document.getElementById("clickedRank").innerHTML = "Master"; 
    input3.style.display = 'none';
    // document.getElementById("totalText2").innerHTML = "Master"; 
}







function Iron3() {    
    document.getElementById('serviceMainInner3').className = "service-main-inner-Iron";
    document.getElementById('marked-c').className = "mark-Iron"
    document.getElementById("clickedRank3").innerHTML = "Iron"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'none';
    mark4c.style.display = 'none';
    mark5d.style.display = 'none';
}

function Bronze3() {
    document.getElementById('serviceMainInner3').className = "service-main-inner-Bronze";
    document.getElementById('marked-c').className = "mark-Bronze"
    document.getElementById("clickedRank3").innerHTML = "Bronze"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'none';
    mark5d.style.display = 'none';
}

function Silver3() {  
    document.getElementById('serviceMainInner3').className = "service-main-inner-Silver";
    document.getElementById('marked-c').className = "mark-Silver"
    document.getElementById("clickedRank3").innerHTML = "Silver"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'none';
    mark5d.style.display = 'none';
}

function Gold3() {   
    document.getElementById('serviceMainInner3').className = "service-main-inner-Gold";
    document.getElementById('marked-c').className = "mark-Gold"
    document.getElementById("clickedRank3").innerHTML = "Gold"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'inline-block';
    mark5d.style.display = 'none';
}

function Platinum3() {   
    document.getElementById('serviceMainInner3').className = "service-main-inner-Platinum";
    document.getElementById('marked-c').className = "mark-Platinum"
    document.getElementById("clickedRank3").innerHTML = "Platinum"; 

    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'inline-block';
    mark5d.style.display = 'none';
}

function Emerald3() {    
    document.getElementById('serviceMainInner3').className = "service-main-inner-Emerald";
    document.getElementById('marked-c').className = "mark-Emerald"
    document.getElementById("clickedRank3").innerHTML = "Emerald"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'inline-block';
    mark5d.style.display = 'inline-block';
}

function Diamond3() {    
    document.getElementById('serviceMainInner3').className = "service-main-inner-Diamond";
    document.getElementById('marked-c').className = "mark-Diamond"
    document.getElementById("clickedRank3").innerHTML = "Diamond"; 
    input3a.style.display = 'inline-block';
    mark3b.style.display = 'inline-block';
    mark4c.style.display = 'inline-block';
    mark5d.style.display = 'inline-block';
}

function Master3() {
    document.getElementById('serviceMainInner3').className = "service-main-inner-Master";
    document.getElementById('marked-c').className = "mark-Master"
    document.getElementById("clickedRank3").innerHTML = "Master"; 
    input3a.style.display = 'none';
}














function ironDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Iron-Desired";
    document.getElementById('mark-d').className = "mark-Iron"
    document.getElementById("clickedRank1").innerHTML = "Iron"; 
    // document.getElementById("totalText4").innerHTML = "Iron"; 
}

function bronzeDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Bronze-Desired";
    document.getElementById('mark-d').className = "mark-Bronze-Desired"
    document.getElementById("clickedRank1").innerHTML = "Bronze"; 
    // document.getElementById("totalText4").innerHTML = "Bronze"; 
}

function silverDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Silver-Desired";
    document.getElementById('mark-d').className = "mark-Silver-Desired"
    document.getElementById("clickedRank1").innerHTML = "Silver"; 
    // document.getElementById("totalText4").innerHTML = "Silver"; 
}

function goldDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Gold-Desired";
    document.getElementById('mark-d').className = "mark-Gold-Desired"
    document.getElementById("clickedRank1").innerHTML = "Gold"; 
    // document.getElementById("totalText4").innerHTML = "Gold"; 
}

function platinumDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Platinum-Desired";
    document.getElementById('mark-d').className = "mark-Platinum-Desired"
    document.getElementById("clickedRank1").innerHTML = "Platinum"; 
    // document.getElementById("totalText4").innerHTML = "Platinum"; 
}

function emeraldDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Emerald-Desired";
    document.getElementById('mark-d').className = "mark-Emerald-Desired"
    document.getElementById("clickedRank1").innerHTML = "Emerald"; 
    // document.getElementById("totalText4").innerHTML = "Emerald"; 
}

function diamondDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Diamond-Desired";
    document.getElementById('mark-d').className = "mark-Diamond-Desired"
    document.getElementById("clickedRank1").innerHTML = "Diamond"; 
    // document.getElementById("totalText4").innerHTML = "Diamond"; 
}

function masterDesired() {
    document.getElementById('serviceMainInnerd').className = "service-main-inner-Master-Desired";
    document.getElementById('mark-d').className = "mark-Master-Desired"
    document.getElementById("clickedRank1").innerHTML = "Master"; 
    // document.getElementById("totalText4").innerHTML = "Master"; 
}

// var slider1 = document.getElementById("myRange");
// var output1 = document.getElementById("rangeText");
// output1.innerHTML = slider1.value;

// slider1.oninput = function() {
//     output1.innerHTML = this.value;
// }
// var slider2 = document.getElementById("myRange2");
// var output2 = document.getElementById("rangeText2");
// output2.innerHTML = slider2.value;


// slider2.oninput = function() {
//     output2.innerHTML = this.value;
    
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);
var currentservice;

function wrChange(evt, serviceType) {
    currentservice = serviceType;
    var i, serviceMainContainer, wrbutton;
    serviceMainContainer = document.getElementsByClassName("serviceMainContainer");
      for (i = 0; i < serviceMainContainer.length; i++) {
        serviceMainContainer[i].style.display = "none";
      }
      wrbutton = document.getElementsByClassName("wrbutton");
      for (i = 0; i < wrbutton.length; i++) {
        wrbutton[i].className = wrbutton[i].className.replace("active", "");
      }
      document.getElementById(serviceType).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



    window.onload = ironDesired(), Iron(), pre(); 

   const clsbx = document.querySelector('.faq_body');
   const clsbxi = document.querySelector('#clsbxinner');

   clsbx.addEventListener('click', (e)=>{
       if(e.target.id === 'clsbxinner'){
        const ele = e.target.parentNode.parentNode.parentNode;
        ele.classList.toggle('expand');
        e.target.classList.toggle('fa-angle-up');
        
       }
   })
