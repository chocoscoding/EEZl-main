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
  
  const auth = firebase.auth();
  const dbf = firebase.firestore();
  const db = firebase.database();
  const side = document.querySelector('.side');
  const openn = document.querySelector('.open');
  const closen = document.querySelector('.close');
  var unlist = document.querySelector('#plist');
  function opennav(){
      side.style.display = 'flex';
      openn.style.display = 'none';
      side.style.transition = '0.3s all ease';
  
  }
  function closenav(){
      side.style.display = 'none';
      openn.style.display = 'block';
      
  }
  var specificdicid;
  var userrid;
  var activej;
  auth.onAuthStateChanged( user => {
    if (user) {
      userrid = user.uid;
      db.ref().child("users").child(user.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          document.querySelector('.account').style.display = 'none';
          document.querySelector('.dashboard').style.display = 'flex';
          dbf.collection('eworker').doc(userrid).onSnapshot((doc) => {
            activej = doc.data().activej;
        });
        }
        else{
          auth.signOut().then(() => {
            if (user) {
              window.location.replace("boosterlogin.html")                
            } else {
              window.alert('something went wrong, try again')
              
            }
          })
        console.log('not logged in');
        }
      })
    } else {
      window.location.replace("boosterlogin.html")
    }
  
  });

  var jobid;

  const lia =document.querySelector('.moreinfo');
  let io9 = document.querySelector('.filter').offsetHeight;
  var j = io9 + lia.offsetHeight;
  function disableScroll() {
        let p = j;
    //   let p = lia.offsetHeight / 4.1;
          window.onscroll = function() {
              window.scrollTo(0, p);
              window.removeEventListener('scroll', disableScroll())
            }}
            function enableScroll() {
                window.removeEventListener('scroll', disableScroll)
                window.onscroll = function() {};
            }
            
            document.querySelector("body > div.showjobs > ul").addEventListener('click', (e)=>{
                // let l = e.target.className;
                if(e.target.classList[0] === 'openjob'){
                    lia.style.display = 'block';
                    lia.scrollIntoView();
                    jobid = e.target.id;
                   let specificdicid1 = e.target.previousElementSibling;
                   specificdicid = specificdicid1.id;
                    oasi()
                    window.addEventListener('scroll', ()=>{
                        if(lia.style.display === 'block'){
                            const q = lia.offsetHeight + j;
                            if(window.innerWidth > 770){
                                
                                let p = q / 2.2;
                            if(window.pageYOffset > p){
                                window.addEventListener('scroll', disableScroll)
                            }
                            else{
                                enableScroll();
                            }
                        }
                        else if(window.innerWidth >= 550){
                            
                            let p = q / 2.4;
                            if(window.pageYOffset > p){
                                window.addEventListener('scroll', disableScroll)
                            }
                            else{
                                enableScroll();
                            }
                        }
                        else if(window.innerWidth >= 390){
                            
                            let p = q / 2.15;
                            if(window.pageYOffset > p){
                                window.addEventListener('scroll', disableScroll)
                            }
                            else{
                                enableScroll();
                            }
                        }
                        else {
                            let p = q/2.2;
                            if(window.pageYOffset > p){
                                window.addEventListener('scroll', disableScroll)
                            }
                            else{
                                enableScroll();
                            }
                        }
                        }
                    })
                }
            })
            function mi(){    
                let k = '#'+jobid
    enableScroll();
    document.querySelector('.moreinfo').style.display = 'none'
    document.querySelector(k).scrollIntoView({block: "center"});
    
}
const ggg ='';

var dbov = {
    All: dbf.collection('market').doc('bjobs').collection('jobs').where("istaken", "==", false).orderBy("productno" , "asc"),
    Iron: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Iron").where("istaken", "==", false).orderBy("productno" , "asc"),
    Bronze: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Bronze").where("istaken", "==", false).orderBy("productno" , "asc"),
    Silver: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Silver").where("istaken", "==", false).orderBy("productno" , "asc"),
    Gold: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Gold").where("istaken", "==", false).orderBy("productno" , "asc"),
    Platinum: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Platinum").where("istaken", "==", false).orderBy("productno" , "asc"),
    Emerald: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Emerald").where("istaken", "==", false).orderBy("productno" , "asc"),
    Diamond: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Diamond").where("istaken", "==", false).orderBy("productno" , "asc"),
    Master: dbf.collection('market').doc('bjobs').collection('jobs').where("desiredrank", "==", "Master").where("istaken", "==", false).orderBy("productno" , "asc")
  
  } 

  var tval = document.querySelector("#rankfilter").value;
  var l = dbov[tval];
  var tim = l;
  var l2 = dbf.collection('market').doc('bjobs').collection('jobs').orderBy("productno" , "asc");
  document.querySelector("#rankfilter").addEventListener('input', (e) =>{
    const vlgyu = e.target.value;
  
    tval = vlgyu;
    l = dbov[tval];
    gt();
})
var lastelement = 0; 
function gt(){
    unlist.innerHTML = ``;
    l.onSnapshot(snapshot => {
      snapshot.docChanges().forEach( element => {
        let direc = element.doc.data();
        let t = direc.toppriority;
        let k;
        if(t){
            k = `<span><i class="fas fa-star"></i></span>`;
        }
        else{
            k=``
        }
        let dir = direc.directory;
        let sdi=  element.doc.id;
        let i = direc.addon;
        const addonsmains = direc.addon || 'none';
        let hc =
`        <li >
        <div class="linebox ${direc.desiredrank}">
            <h1>${direc.serviceType} ${k}</h1>
        </div>
        <div class="main_info" id='${sdi}'>
            <p>Desired Rank: <span id="drank">${direc.desiredrank}</span></p>
            <p>Desired Division : <span id="ddivision">${direc.desireddivision}</span></p>
            <p>Device : <span id="device">${direc.device}</span></p>
            <p>Desired Location : <span id="dlocation">${direc.desiredlocation}</span></p>
            <p>Add-On : <span id="addon"> ${addonsmains}</span></p>
        </div>
        <div class="openjob ${direc.desiredrank}" id="wa${direc.productno}">View More</div>
        
    </li>`
      
      unlist.insertAdjacentHTML('afterbegin', hc);
      })
      che();
      lastelement = snapshot.docs[snapshot.docs.length - 1];
    })
  }
  gt();
  function che(){
    l.onSnapshot(snapshot =>{
        if(document.querySelectorAll(".pll").length >= (snapshot.size) ){
            document.querySelector("body > div.showmore > button").style.display = 'block'
  }
  else{
      document.querySelector("body > div.showmore > button").style.display = 'none' 
  }
})
  }
    function showmore(){
      const moreref = l.startAfter(lastelement).limit(25);
      moreref.onSnapshot(snapshot =>{
        snapshot.docChanges().forEach(element =>{
            let direc = element.doc.data();

            
          let hc = ` <li class="pll">
          <div class="pll_top">
              <p>PROJECT-NO: ${direc.pn}</p>
              <div class="likebutton">
                  <i id="likebutton" class="far fa-heart"></i>
              </div>
          </div>
          <div class="main_content">
              <p>RANK: ${direc.rk}</p>
              <p>DIVISION: ${direc.dv}</p>
              <p>MARK: ${direc.mk}</p>
              <p>MATCHES WON: ${direc.mw}</p>
          </div>
          <div class="viewmore">
              <div class="vmb"onclick="window.location.href='products/${direc.link.id}'"><i class="fas fa-arrow-right"></i></div>
          </div>
        </li>`
        
        unlist.insertAdjacentHTML('beforeend', hc);
            
        })
        lastelement = snapshot.docs[snapshot.docs.length - 1];
      })
     che();
  
    }
    function redirect (){
            var url =  'bstrDashboard.html';
            window.open(url, '_blank');
    }
  var did;    var getin;
    function oasi(){
        document.querySelector("body > div.showjobs > div > div.display > div.inner1").style.display = 'block';
        document.querySelector("body > div.showjobs > div > div.display > div.inner2").style.display = 'flex';
        document.querySelector("body > div.showjobs > div > div.display > div.inner3").style.display = 'none';
        let l =dbf.collection('market').doc('bjobs').collection('jobs').doc(specificdicid);
        l.onSnapshot(snapshot =>{
            let p = snapshot.data()
            getin = p.istaken;
            let addonsmain = p.addon.toString();
                    document.querySelector('#stype').innerHTML = p.serviceType;
                    document.querySelector('#crank').innerHTML = p.currentrank;
                    document.querySelector('#cmark').innerHTML = p.currentmark;
                    document.querySelector('#cdivision').innerHTML = p.currentdivision;
                    document.querySelector('#drank').innerHTML = p.desiredrank;
                    document.querySelector('#ddivision').innerHTML =p.desireddivision ;
                    document.querySelector('#device').innerHTML = p.device;
                    document.querySelector('#dlocation').innerHTML = p.desiredlocation;
                    document.querySelector('#addons').innerHTML = addonsmain || 'none';
                    document.querySelector('#duration').innerHTML = p.duration + ' days';
                    document.querySelector('#ypay').innerHTML = `$ ${p.pay}`;
        })
    }
    document.querySelector('#aj').addEventListener('click', (e) => {
        const loadingtext =  document.querySelector('#ldinloadert');
        
        console.log(e.target.parentNode);
        let l =dbf.collection('market').doc('bjobs').collection('jobs').doc(specificdicid);
        if(!activej){

        if(!getin) {
            document.querySelector("body > div.showjobs > div > div.display > div.inner1").style.display = 'none';
            document.querySelector("body > div.showjobs > div > div.display > div.inner2").style.display = 'none';
            document.querySelector("body > div.showjobs > div > div.display > div.inner3").style.display = 'flex';
        l.update({
            istaken: true
        })
        l.onSnapshot(snapshot =>{
            let p = snapshot.data();
            function run(){
            dbf.collection('eworker').doc(userrid).collection('bjobs').add({
                projectdirectory: p.directory,
                price: p.pay,
                gameusername: p.gameusername,
                gamepassword: p.gamepassword,
                paymentstatus: false,
                projectended: false,
                tips: 0,
                request:false
                
            })
            .then((docRef) => {
                console.log(docRef.id);
                let l = docRef.id;
                did = docRef.id;
                dbf.collection('eworker').doc(userrid).collection('bjobs').doc(l).update({
                    ref: docRef.id
                })
                .then(()=>{
                    console.log(p);
                        dbf.collection('projects').doc(p.directory.z).collection(p.directory.ftoken).doc('info').update({
                            boostersdirectory: {
                                a: 'eworker',
                                b: userrid,
                                c: 'bjobs',
                                d: did
                            }
                        })
                })
                
            })
            .then(()=>{
                dbf.collection('eworker').doc(userrid).update({
                    activej: true
                })
            })
            .then(()=>{
                loadingtext.innerHTML = 'Finishing up...'

            })
            .then(()=>{
                loadingtext.className = '';
                loadingtext.innerHTML = `Done😀, go to <i onclick= redirect()>dashboard</i> now `

            })
            .catch((err) => {
                console.log('Error adding document:', err);
                
            })

        }
        run();

    })
        }
        else{
            console.log('omo, e don go');
        }
    }
    else{
        document.querySelector("body > div.showjobs > div > div.display > div.inner1").style.display = 'none';
        document.querySelector("body > div.showjobs > div > div.display > div.inner2").style.display = 'none';
        document.querySelector("body > div.showjobs > div > div.display > div.inner3").style.display = 'flex';
        loadingtext.className = '';
        loadingtext.className = 'sixe';
        loadingtext.innerHTML = `You currently have an unfinished project. Finish your projects or make sure that customers  end the service `
    }
          
    })
    l.onSnapshot(snapshot => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "removed") {
                gt();
                        }
        });
    });