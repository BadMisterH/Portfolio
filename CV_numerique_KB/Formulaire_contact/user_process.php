<?php

include("dbconnect.php");
$surname=$_REQUEST['surname'];
$name=$_REQUEST['name'];
$city=$_REQUEST['city'];
$email=$_REQUEST['email'];
$msg = $_REQUEST['message'];

/*
 * Inserting data to table
 * */

$query=mysqli_query($db_connect, "INSERT INTO information (Nom, Prenom, email, Ville, message) VALUES ('$surname', '$name','$city','$email','$msg')") or die(mysqli_error($db_connect));

mysqli_query($db_connect);

header ("location: index.php?note=success");


?>