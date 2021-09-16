<?php 

$user ="root";
$mdp = '';

try{

  $bdd = new PDO('mysql:host=localhost;dbname=utilisateur;charset=utf8' , $user, $mdp);


}
catch(PDOException $e){
    print "Erreur !:" . $e->getMessage() . "</br>";
    die();
}

$_SESSION['prenom'] = "";
$_SESSION['nom']= "";
$_SESSION['adresse_mail']="";
// $_SESSION['mot_de_passe']= ""; //refresh automatiquement les input
$_SESSION['message']= ""; //refresh automatiquement les input



if(isset($_POST['envoyer'])){
  if(!empty($_POST['prenom']) &&  !empty($_POST['nom']) &&  !empty($_POST['adresse_mail']) && !empty($_POST['message'])){

    $prenom = $_POST['prenom'];
    $nom = $_POST ['nom'];
    $adresse_mail = $_POST['adresse_mail'];
    // $mot_de_passe = $_POST['mot_de_passe'];
    $message = $_POST['message'];

    $securitePlus = [
            'cost' => 12,
    ];
    
  //  $pass_protected = password_hash($mot_de_passe, PASSWORD_DEFAULT, $securitePlus); //hasher le mot de passe


 

    $insert = "INSERT INTO `user`(`prenom`, `nom`, `adresse_mail`, `message` ) VALUES ('$prenom', '$nom', '$adresse_mail', '$message')";
    $stmt = $bdd->prepare($insert) or die(mysql_error()); //prepare pour analyser la requete sql INSERT

    $stmt->execute([
      'prenom' => $prenom,
      'nom' => $nom,
      'adresse_mail'=> $adresse_mail,
      // 'mot_de_passe'=> $pass_protected
    ]);

    echo '<p class="alert alert-success">Formulaire envoyer.</p>';

  }
  else if (strlen(empty($_POST['prenom'])) && strlen(empty($_POST['nom'])) && strlen(empty($_POST['adresse_mail']))&& !empty($_POST['message'])){
       echo '<p class="alert alert-danger">Veuillez remplir les cordonnées demandées.</p>';
  } else if(strlen(empty($_POST['prenom'])) || strlen(empty($_POST['nom'])) || strlen(empty($_POST['adresse_mail'])) || strlen(empty($_POST['mot_de_passe']))&& !empty($_POST['message'])){
    echo '<p class="alert alert-danger">Veuillez remplir les cordonnées demandées.</p>';
  }
}  




?>



