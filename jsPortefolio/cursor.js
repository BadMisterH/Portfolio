const cercle = document.createElement("div");
const CercleClass = cercle.classList.add("circle")

let cercleVisible = document.body.appendChild(cercle);

const CercleCible = document.querySelector(".circle")



window.addEventListener("mousemove", (e)=>{
    cercle.style.top = e.pageY + "px"
    cercle.style.left = e.pageX  + "px"

})






