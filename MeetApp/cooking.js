//https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

// let meals_tab = [];

// const affichage = async () =>{
//     await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=duck")
//     .then((res) => res.json())
//     .then((cooking) => meals_tab = cooking.meals);

// }

const input = document.getElementById("search");
const liste = document.getElementById("result");

let tabCooking = [];

async function dataFetch(ingredient) {
  await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient
  )
    .then((res) => res.json())
    .then((cooking) => (tabCooking = cooking.meals));
}

const display = () => {
  let ingredients = [];

  if (tabCooking === null) {
    liste.innerHTML = `<p>Resultat vide</p>`;
  } else {
    tabCooking.length = 12;
    liste.innerHTML = tabCooking
      .map((meals) => {
        for (i = 1; i < 21; i++) {
          if (meals[`strIngredient${i}`]) {
            let ingredientt = meals[`strIngredient${i}`];
            let Mesure = meals[`strMeasure${i}`];

            ingredients.push(`<li>${ingredientt} - ${Mesure} </li>`);
          } else {
          }
        }

        //affichage 
        return `
      <li class="card>
      <h2>${meals.strMeal}</h2>
      <p>${meals.strArea}</p>
      <img src=${meals.strMealThumb} alt= photo ${meals.strMeal}></img>
    
      <ul>${ingredients.join("")}</ul>
    
      </li>
    
      `;
      })
      .join("");
  }
};

input.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
  }

  dataFetch(e.target.value).then(() => display()); //display ne se lancera pas tant que datafetch n'es pas fini
});
