
window.addEventListener("scroll", ()=>{

   let nav =  document.querySelector(".head1")

    if(window.pageYOffset <= 20){
        nav.classList.remove("nav-animation")
        nav.classList.remove("positonHeader")

    }else{
        nav.classList.add("nav-animation")
        nav.classList.add("positonHeader")
    }

    let nav2 =  document.querySelector(".header2")

    if(window.pageYOffset <= 20){
        nav2.classList.remove("nav-animation2")
    }else{
        nav2.classList.add("nav-animation2")
    }

})

let button = document.querySelector('.Proj');
let button2 = document.querySelector('.Index');
let button3 = document.querySelector('.Aprop');
let button4 = document.querySelector('.Compet');






const LN = document.querySelector(".lastName")


