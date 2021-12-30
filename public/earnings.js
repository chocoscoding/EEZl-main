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
    function doece(){
    dbf.collection('eworker').doc(userrid).collection('bjobs').get().then((query)=>{
        if(query.size > 0){
        document.querySelector("#mainbox").innerHTML = '';
        query.forEach(doc => {
            const x = doc.data();
            if(x.projectended === true){
            const x2 = doc.id;
            
            if(x.paymentstatus === false){
                if(x.request === false){
                    const l = `<div class="productsshow">
                    <div class="pdlcontainer">
                        <div class="showproid" id="ctrlm">
                            <h4>Project Id:</h4>
                            <div class="i1">${x2}</div>
                        </div>
                        <div class="showprocost" id="ctrlm">
                        <h4>Project Total:</h4>
                        <div class="i2">${x.price + x.tips}</div>
                    </div>
                    <div class="showwn" id="ctrlm">
                        <h4>Send Payment Request:</h4>
                        <div class="i3" onclick='sendreq(this)'>Send Request</div>
                    </div>
                </div>
            </div>`
                document.querySelector("#mainbox").insertAdjacentHTML("beforeend", l);
            }
                else{
                    const l = `            <div class="productsshow">
                    <div class="pdlcontainer">
                        <div class="showproid" id="ctrlm">
                            <h4>Project Id:</h4>
                            <div class="i1">${x2}</div>
                        </div>
                        <div class="showprocost" id="ctrlm">
                            <h4>Project Total:</h4>
                            <div class="i2">${x.price + x.tips}</div>
                        </div>
                        <div class="showwn" id="ctrlm">
                            <h4>Send Payment Request:</h4>
                            <div class="i4">Request Sent</div>
                        </div>
                    </div>
                </div>`


                                    document.querySelector("body > section > main").insertAdjacentHTML("beforeend", l)                           

                }
            }
            else{   
                const l = `<div class="productsshow">
                <div class="pdlcontainer">
                    <div class="showproid" id="ctrlm">
                        <h4>Project Id:</h4>
                        <div class="i1">${x2}</div>
                    </div>
                    <div class="showprocost" id="ctrlm">
                    <h4>Project Total:</h4>
                    <div class="i2">${x.price + x.tips}</div>
                </div>
                <div class="showwn" id="ctrlm">
                    <h4>Send Payment Request:</h4>
                    <div class="i5">PAID</div>
                </div>
            </div>
        </div>`
                document.querySelector("#mainbox").insertAdjacentHTML("beforeend", l); 
            }
        }
    });
    }
        else{
            document.querySelector("#mainbox").innerHTML = 'No project found';
        }
    })
}
doece();

function sendreq(el){
    const x = el.parentElement.previousElementSibling.previousElementSibling.childNodes[3].innerHTML;
    dbf.collection('eworker').doc(userrid).collection('bjobs').doc(x).update({
        request: true
    }).then(()=>{
        document.querySelector("#mainbox").innerHTML = '';
        document.querySelector('.showsucess').style.display = 'flex';
        document.querySelector('.showsucess').scrollIntoView();
        doece();
        setTimeout(() => {
          document.querySelector('.showsucess').style.display = 'none';
        }, 5000)
    }).catch((error)=>{
        const x = error.message;
        document.querySelector('.showerror').style.display = 'flex';
        document.querySelector('.showerror').innerHTML = x;
        document.querySelector('.showerror').scrollIntoView();
        setTimeout(() => {
          document.querySelector('.showerror').style.display = 'none';
        }, 5000);
    })
}

document.querySelector('.processshow').addEventListener('click', (e)=>{
    if(e.target.className === 'showinfo3'){
    e.target.parentElement.style.display = 'none';}
    else if(e.target.id === "closeshow"){      
        e.target.parentElement.parentElement.style.display = 'none';
    }
  })