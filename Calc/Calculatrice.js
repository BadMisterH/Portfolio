const calculatrice = document.querySelector(".calculatrice");



for (let i = 9; i >= 0; i--) {
  const btn = document.createElement("button");
  const inserer = calculatrice.appendChild(btn);
  inserer.innerHTML = i;
  inserer.id = i;
  btn.classList.add("btn");
  btn.addEventListener("click", () => {
    const h3 = document.querySelector(".affichage");

    h3.innerHTML = h3.innerHTML + i;



  });
}

const tabOperateur = ["-", "+", "/", "*"];

for (let j = 0; j < tabOperateur.length; j++) {
  const btnOperateur = document.createElement("button");
  btnOperateur.id="btnOperateur"
  const insererCaractere = calculatrice.appendChild(btnOperateur);
  insererCaractere.innerHTML = tabOperateur[j];

  btnOperateur.addEventListener("click", () => {
    const h3 = document.querySelector(".affichage");
    h3.innerHTML += tabOperateur[j];
  });
}

// const btnOperateur = document.createElement("button");
// const inserer = calculatrice.appendChild(btnOpérateur);
// inserer.innerHTML = "-"


const egale = document.createElement("button")
const insertEqual = calculatrice.appendChild(egale);
insertEqual.innerHTML = "=";
egale.id = "Egale"

const reset = document.createElement("button")
const insertReset = calculatrice.appendChild(reset);
insertReset.innerHTML = "C"
reset.id = "Reset"

const clickEqual = document.getElementById("Egale");
const clickReset = document.getElementById("Reset");


clickEqual.addEventListener("click",()=>{
    const h3 = document.querySelector(".affichage");
    h3.innerHTML = eval(h3.innerHTML)
})

clickReset.addEventListener("click",()=>{
    const h3 = document.querySelector(".affichage");
    h3.innerHTML = ""
})