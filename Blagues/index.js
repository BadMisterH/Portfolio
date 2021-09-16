// let data = [
//     {nom : "Denis", age : "22", tech : ["CSS", "React", "Node"]},
//     {nom : "Chris", age : "45", tech : ["CSS", "React", "Node"]},
//     {nom : "Jean", age : "12", tech : ["CSS", "React", "Node"]}
// ]

// // console.log(data.map((eee)=>{
// //     console.log(eee.nom)
// // }))

// let w = 0;

// while (w<10) {
//     w++
//     // console.log("La valeur de w est de : " + w)
// }

// let string = "Javascript est un langage orienté objet";

// let newString = string.slice(5, 17)

// let number = 42.1233
// let numberString = "322,21 est un chiffre"

// // console.log(number.toFixed())
// // console.log(parseInt(numberString));
// // console.log(parseFloat(numberString))

// console.log(Math.PI)
// console.log(Math.round(4.5))
// console.log(Math.floor(Math.random() * 10))

// let array = ["Java", "PHP", "Python"]
// let array2 = ["Ruby", "Solidity"]

// // console.log(array.join("-"))

// // console.log(array2.slice())

// data.map((nom)=>{
//     console.log(nom.nom)
// })

// const arrayUltime = array2.concat(array)
// console.log(arrayUltime)

// let  date= new Date()
// console.log(date)

// let information = [
// {pseudo : "Christophe", age : 22, profession : "Pompier"},
// {pseudo : "Jean", age : 27, profession : "Pompier"},
// {pseudo : "Marine", age : 39, profession : "Boulanger"}
// ]

// // information.forEach((pseudo)=>{
// //     const divHTML = document.getElementById("my")
// //     const div = document.createElement("div");
// //     div.classList.add("cards");
// //     div.innerHTML = `<h2 class="h2">${pseudo.pseudo}</h2>
// //     <h3>Age : ${pseudo.age}</h3>
// //     <h4>Profession : ${pseudo.profession}</h4>`
// //     divHTML.appendChild(div)

// // })

// information.map((eee)=> console.log(eee.age))

// let datee = new Date();

// const dateParser = (chaine) =>{
//     let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
//         year : "numeric",
//         month : "numeric",
//         day : "numeric",
//         hour : "numeric",
//         minute : "numeric"
//     });

// }

// let dataaa = {
//     dddd : ["edee", "eee"]
// }

// const {dddd} = dataaa //Le destructure cible

// console.log(dataaa.dddd)
// console.log(dddd)

// let arrayy = [70, 10, 20]
// let [x, y, z] = arrayy

// console.log(x)

// let iso = datee.toISOString();
// console.log(iso)

// const dataDestructing = (chaine) =>{
//     let newDatee = chaine.split('T')[0];
//   let [y, m, d] = newDatee.split("-")
//   return [d, m, y].join("/")
// }

// fetch("data.json")
//   .then((res) => res.json())
//   .then((dataaa) => {
//     console.log(dataaa.groupe);
//   });




fetch("https://api.blablagues.net/?rub=blagues").then((res)=>res.json()).then((blagues)=> {

    const header = document.getElementById("#header");
    const content = document.querySelector(".content")
    
    const btnContainer = document.querySelector(".btnContainer")
    const button =  document.createElement("button");

    header.classList.add("centerStyle")
    header.innerHTML = blagues.data.content.text_head;



      blagues.data.content.text === "" ? content.textContent = blagues.data.content.text_hidden : content.textContent = blagues.data.content.text



   const ContainerBtn =  btnContainer.appendChild(button)
   ContainerBtn.classList = "btn"




   ContainerBtn.addEventListener("click", ()=>{

    content.classList.add("show")

   })


})


const btnReload = document.createElement("button")
const BtnAppear = document.body.appendChild(btnReload)
BtnAppear.classList = "buttonRefresh"
BtnAppear.textContent ="Refresh Joke"


BtnAppear.addEventListener("click", ()=>{
    document.location.reload(); // pour refresh une page
})