const ErrorDisplay = (tag, message, error = true) => {
  const span = document.querySelector("." + tag + "-container > span");
  const containerValid = document.querySelector(
    "." + tag + "-container > input"
  );

  const inputss = document.querySelector("input") 

  inputss;addEventListener("input", (e)=>{
      e.target.value.length === 0 ? containerValid.classList = "" : ""

  })

  if (error) {

    //si c'est vrai
    span.classList.add("error");
    span.textContent = message;
    // console.log(error);
    containerValid.classList.add("errorInput");
  }
    else if (containerValid.length === 0){
    }
  else {
    //si c'est faux
    containerValid.classList.remove("errorInput");
    containerValid.classList.add("valid");
    span.classList.remove("error");
    span.textContent = message;
  }
};


let pseudo, email, Mot_de_passe, ConfirmMdp;

const VerifierPseudo = (valeur) => {
  if (valeur.length > 0 && (valeur.length < 3 || valeur.length > 23)) {
    //  const pseudoError = document.querySelector(".pseudo-container > span");
    //  pseudoError.id = "error"
    //  pseudoError.textContent = "Le Pseudo doit contenir entre 3 et 23 caracteres"

    ErrorDisplay("pseudo", "Le Pseudo doit contenir entre 3 et 23 caracteres");
    pseudo = null;
  } else if (!valeur.match(/^[a-zA-Z0-9_.-]*$/)) {
    // const pseudoError = document.querySelector(".pseudo-container > span");
    // pseudoError.id = "error"
    // pseudoError.textContent = "Ne pas inserer des caracteres speciaux"
    ErrorDisplay(
      "pseudo",
      "Le Pseudo ne doit pas contenir de caractere speciaux"
    );
    pseudo = null;
  } else if (valeur.length === 0) {
    ErrorDisplay("pseudo", "Le Pseudo est vide");
  } else {
    // const PseudoValid = document.querySelector(".pseudo-container > span");
    // PseudoValid.id = "valid"
    // PseudoValid.textContent = "Le Pseudo est valide"
    ErrorDisplay("pseudo", "", false);
    pseudo = valeur;
  }
};

const MailCheck = (Mail) => {
  const MailPasValid = !Mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i);
  if (MailPasValid) {
    ErrorDisplay("mail", "le Mail n'est pas valide");
    email = null;

  } 
  else if (Mail.length === 0) {
    ErrorDisplay("mail", "Mail est vide");
  }
  else {
    ErrorDisplay("mail", "", false);
    email = Mail;
  }
};

const PasswordCheck = (Mdp) => {

  if (
    !Mdp.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    ErrorDisplay(
      "password",
      "Le mot de passe doit comporter un caractere special un chiffre des lettres et des Majuscules"
    );
    Mot_de_passe = null;
  }
  
  else if (Mdp.length === 0) {
    ErrorDisplay("password", "Le mot de passe est vide");
  } 
  
  else {
    ErrorDisplay("password", "", false);
    Mot_de_passe = Mdp;
  }


  // if(Mdp.length > 0 && Mdp.length <7){
  //   document.querySelector(".password-container > p").classList = ""
  //     document.querySelector(".password-container > p").classList.add("progress-bar")
  // }else if (Mdp.length >=7 && Mdp.length < 20){
  //   document.querySelector(".password-container > p").classList = ""
  //   document.querySelector(".password-container > p").classList.add("progress-bar_milieu")

  // }else if (Mdp.length === 0){
  //   document.querySelector(".password-container > p").classList = ""
  // }else {
  //   document.querySelector(".password-container > p").classList = ""
  //   document.querySelector(".password-container > p").classList.add("progress-bar_fin")
  // }

  if (ConfirmMdp) PasswordCheckConfirm(ConfirmMdp); //tu joue la fonction confirm mot de passe dans la fonction mot de passe
};

const PasswordCheckConfirm = (valeurMdp) => {

  if (valeurMdp === Mot_de_passe) {
    ErrorDisplay("Confirmpassword", "", false);
    ConfirmMdp = true;
  } else {
    ErrorDisplay("Confirmpassword", "Les mots de passes ne correspondent pas");
    ConfirmMdp = false;
  }
};

const inputs = document.querySelectorAll(
  "input[type=text], input[type=password],input[type=email]"
);

inputs.forEach((formInput) => {
  formInput.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        VerifierPseudo(e.target.value);
        break;
      case "mail":
        MailCheck(e.target.value);
        break;
      case "password":
        PasswordCheck(e.target.value);
        break;
      default:
        PasswordCheckConfirm(e.target.value);
    }
  });
});

// const spann = document.querySelector(".password-container > span");
// spann.classList.add("progress-bar")
// console.log(spann)
//   if (valeur.length < 8 && valeur.length > 0) {
//     progressbar.classList.add("progress-bar");
//   } else if (valeur.length >= 8 && valeur.length < 20) {
//     progressbar.classList.add("progress-bar_milieu");
//   } else if (valeur.length === 0) {
//     progressbar.classList = "";
//     ErrorDisplay("password", "Le mot de passe est vide" )

//   } else {
//       progressbar.classList.remove("progress-bar")
//     progressbar.classList.add("progress-bar_fin");
//   }
// if(valeur.length === 0){
//     const progressbar = document.querySelector(".password-container > div");
//     const spannn =  document.createElement("p");
//    const affichageCreateElement = progressbar.appendChild(spannn)
//    affichageCreateElement.innerHTML = "Le mot de passe est vide"
// }

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let information = [
      {pseudo : pseudo, email : email, Mot_de_passe : Mot_de_passe},
  ]


  information.map((info)=>{
      console.log(info)
  })

  form.reset();

  alert("FORMULAIRE ENVOYER")

  document.querySelector(".password-container > p").classList=""
  
});

