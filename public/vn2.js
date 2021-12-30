// document.querySelector('.quickactions1').style.height = 'auto';
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
     document.querySelector('.quickactions1').style.height = 'auto';
     document.querySelector('.qabtn1').classList.toggle('navc')
     document.querySelector('.qabtn2').classList.toggle('navc')
     document.querySelector('.qabtn3').classList.toggle('navc')
     document.querySelector('.qabtn4').classList.toggle('navc')
    }else {
        if(window.screen.width <= '600'){
            document.querySelector('.quickactions1').style.height = 'auto';
            document.querySelector('.qabtn1').classList.toggle('navc')
            document.querySelector('.qabtn2').classList.toggle('navc')
            document.querySelector('.qabtn3').classList.toggle('navc')
            document.querySelector('.qabtn4').classList.toggle('navc')
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
        else{

            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        document.querySelector('.quickactions1').style.height = '225px';
        document.querySelector('.qabtn1').classList.toggle('navc')
        document.querySelector('.qabtn2').classList.toggle('navc')
        document.querySelector('.qabtn3').classList.toggle('navc')
        document.querySelector('.qabtn4').classList.toggle('navc')
    }
 }
}
window.addEventListener('resize', ()=>{
    if(window.screen.width <= '600'){
        if(document.querySelector('.qabtn1').classList[1] === 'navc'){
            document.querySelector('.quickactions1').style.height = 'auto';
            console.log('working');
            document.querySelector('.qabtn1').classList.toggle('navc')
            document.querySelector('.qabtn2').classList.toggle('navc')
            document.querySelector('.qabtn3').classList.toggle('navc')
            document.querySelector('.qabtn4').classList.toggle('navc')
        }
    }
})
