"use strict";

$(document).ready(function(){
    // Vos instructions jQuery ici…

    
    $("h1").css({"color":"red","font-style":"italic"});
    $("#email").css({"background-color":"red"});
    $("#prenom").css({"background-color":"red"});

    
    /*$("#prenom").on("click",function(){
        
       console.log("Il y a eu clic !");
      $("#prenom").css({"background-color":"green"});
    
    });
*/

    
$("#prenom").on("keypress",function(){
        
    console.log("Il y a une entré !");
   $("#prenom").css({"background-color":"green"});
   
 
 });


 



    
 })
 