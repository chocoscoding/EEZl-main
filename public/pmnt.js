
  auth.onAuthStateChanged( user => {
    if (user) {
      document.querySelector('.account').style.display = 'none';
      document.querySelector('.dashboard').style.display = 'flex';
    } else {
      console.log('not logged in');
      document.querySelector('.account').style.display = 'flex';
      document.querySelector('.dashboard').style.display = 'none';
    }
  
  });
  document.querySelector("#Mark-no1").addEventListener('click', ()=>{
    document.querySelector('.totalerror').style.display = 'none';
  })
  function getfinalprice(){
    const  currentchoice = document.querySelector("#Mark-no1").value;
    const choiceforrw = document.querySelectorAll("#Mark-no1")[1].value;
    const errortext = document.querySelector('.totalerror')

    const valuelist = {
      '': 0,
      '0 Mark': 0.10,
      '1 Mark': 0.11,
      '2 Mark': 0.12,
      '3 Mark': 0.13,
      '4 Mark': 0.14,
      '5 Marks': 0.15
    }
    if(currentservice === 'rankBoosting'){ 
      if(crst !== 'Master'){
        console.log('not master');
        if(currentchoice !== ''){
  
        const newc = gp;
        const calnum = valuelist[currentchoice]
        const final = Math.floor((newc*calnum) + newc)
        document.getElementById('openedpay').style.display = 'block';
        return final;
      }
      else{
        errortext.style.display = 'flex';
        setTimeout(()=>{
          errortext.style.display = 'none';
        },5000)
        console.log('Pick a mark');
      }
    }
  }
  else if(currentservice === 'rankedWins'){
    if(crst_crr !== 'Master'){
      if(choiceforrw !== ''){
        const newc = gp;
        console.log(newc);  
        // const calnum = valuelist[currentchoice]
        // const final = Math.floor((newc*calnum) + newc)
        // document.getElementById('openedpay').style.display = 'block';
        // return final;
      }
    }
  }
  else {

  }
  }
  function openpay() {
  getfinalprice();
    // console.log(prit);
    // auth.onAuthStateChanged( user => {
    //     if (user) {
    //         document.getElementById('openedpay').style.display = 'block';
    //     } else {
    //         document.getElementById('openedpay').style.display = 'none';
    //         window.location.replace("login.html");

    //     }
    // });
}

function openpayClose() {
    document.getElementById('openedpay').style.display = 'none';
}
const pmntpri = tt.innerHTML.replace("$", "");

paypal.Buttons({
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: tt.innerHTML.replace("$", "")
          }
        }]
      });
    },
    onApprove:function(data, actions) {
        return actions.order.capture().then(function (details){
            if (details.status){
                console.log('details.status');
                document.getElementById('open1').style.display = 'none';
                document.getElementById('open2').style.display = 'block';
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
