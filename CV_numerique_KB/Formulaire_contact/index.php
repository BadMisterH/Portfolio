<?php

include("dbconnect.php");
/*$note=$_REQUEST['note'];*/

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<head>
    <title>FORMULAIRE DE &amp; CONCTACT </title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>

<div>

<!--
<?PHP if($note=='success')
    {
    echo "<div class=\"success\">Form successfully submitted!</div>";
    }
?>
-->$_POST
<h1>CONTACTER MOI !</h1>

    <div id="contact-area">

        <form method="post" action="user_process.php">

       <label for="Name">Prenom :</label>
        <input type="text" placeholder="Prénom" id="prenom" name="surname" required
        data-validation-required-message="Merci d'entrer votre prénom." />


            <label for="Name">Nom :</label>
            <input type="text" name="name" placeholder="Votre nom" id="Name" required />

            <label for="City">Ville :</label>
            <input type="text" name="city"  placeholder="Votre ville" id="City" />

            <label for="Email"> Email : </label>
            <input type="email" name="email" placeholder="Courriel"  id="email" required data-validation-required-message="Merci d'entrer votre adresse de courriel."/>

            <label for="Message">Message:</label><br />
            <textarea name="message" rows="20" cols="20" placeholder="Message" id="Message" required></textarea>

            <input type="submit" name="submit" value="Submit" class="submit-button" /> 
        </form>

       <div id="R"><a href="../effect.html"> Retour à l'accueil </a></div> 


        <div style="clear: both;"></div>
        
    </div>

</div>

</body>
</html>