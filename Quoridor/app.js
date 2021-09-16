function quoridor() {
    let tour = 0;
    let barriereR = 10;
    let barriereB = 10;
    let barriereN = 10;
    let barriereJ = 10;
    let element = document.createElement("div");
    let baton = 0;

    let wallCount = {
        player1: 10,
        player2: 10,
        player3: 10,
        player4: 10
    };
    

    $(".carre#4").addClass("cercleR"); //emplacement des pions
    $(".carre#76").addClass("cercleB");
    $(".carre#36").addClass("cercleN");
    $(".carre#44").addClass("cercleJ");

    $(".mur").on('dblclick', function(){ //placement des murs vertical
        if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && tour == 0 && barriereR > 0  && wallCount.player1 > 0){
            $("p").append("<r>Le joueur 1 a placé un mur vertical</r><br>");
            $(this).addClass("murPlace");
        } else if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlace3") == false  && $(this).hasClass("murPlacefor") == false && $(this).hasClass("murPlaceTwo") == false  && tour == 1 && barriereB > 0  && wallCount.player2 > 0){
            $("p").append("<b>Le joueur 2 a placé un mur vertical</b><br>");
            $(this).addClass("murPlaceTwo");
        } else if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && $(this).hasClass("murPlacefor") == false && $(this).hasClass("murPlace3") == false   && tour == 2 && barriereN > 0  && wallCount.player3 > 0){
            $("p").append("<black>Le joueur 3 a placé un mur vertical</black><br>");
            $(this).addClass("murPlace3");
        } else  if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && $(this).hasClass("murPlace3") == false && $(this).hasClass("murPlacefor") == false   && tour == 3 && barriereJ > 0  && wallCount.player4 > 0){
            $("p").append("<j>Le joueur 4 a placé un mur vertical</j><br>");
            $(this).addClass("murPlacefor");
        }
    });
 
    $(".mur").click(function(){   //ajoue d'un mur horizontal 

    let murId = {
        initial: Number($(this).attr('id')),
        second: Number(Number($(this).attr('id'))+8)
    };

        if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && tour == 0 && barriereR > 0  && wallCount.player1 > 0){
            $(this).addClass("murPlace");
            $(`div#${murId.second}.mur`).trigger('dblclick');


            wallCount.player1--;


            baton = document.querySelector('.baton');
            document.querySelector('#top').removeChild(baton);
            
            if(barriereR <0){
            barriereR = barriereR - 1;
            }   
            tour = 1; 

    
            


        }


        
        if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlace3") == false  && $(this).hasClass("murPlacefor") == false && $(this).hasClass("murPlaceTwo") == false  && tour == 1 && barriereB > 0 && wallCount.player2 > 0 ){
            $(this).addClass("murPlaceTwo");  //ajoue d'un mur horizontal par l'autre joueur
            $(`div#${murId.second}.mur`).trigger('dblclick');

            baton = document.querySelector('.baton2');
            document.querySelector('#bottom').removeChild(baton);

            wallCount.player2--;

            
            if(barriereB <0){
                barriereB = barriereB - 1;
            }
                tour = 2;
        }
        
        if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && $(this).hasClass("murPlacefor") == false && $(this).hasClass("murPlace3") == false   && tour == 2 && barriereN > 0 && wallCount.player3 > 0 ){
            $(this).addClass("murPlace3");  //ajoue d'un mur horizontal par l'autre joueur
            $(`div#${murId.second}.mur`).trigger('dblclick');

            baton = document.querySelector('.baton3');
            document.querySelector('#left').removeChild(baton);

            wallCount.player3--;

            
            if(barriereN <0){
                barriereN = barriereN - 1;
            }
                tour = 3;
        }

        if($(this).hasClass("murPlace") == false && $(this).hasClass("murPlaceTwo") == false && $(this).hasClass("murPlace3") == false && $(this).hasClass("murPlacefor") == false   && tour == 3 && barriereJ > 0  &&  wallCount.player4 > 0 ){
            $(this).addClass("murPlacefor");  //ajoue d'un mur horizontal par l'autre joueur
            $(`div#${murId.second}.mur`).trigger('dblclick');
            baton = document.querySelector('.baton4');
            document.querySelector('#right').removeChild(baton);

            wallCount.player4--;
            
            if(barriereJ <0){
                barriereJ = barriereJ - 1;
            }
                tour = 0;
        }
    })


    $('.ligne').on("dblclick", function(){ //placement des murs horizontal
        if($(this).hasClass("lignePlace") == false && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 0 && barriereR > 0 && wallCount.player1 > 0 ){
            $("p").append("<r>Le joueur 1 a placé un mur horizontal</r><br>");
            $(this).addClass("lignePlace");
        } else if($(this).hasClass("lignePlace") == false && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 1 && barriereB > 0 && wallCount.player2 > 0 ){
            $("p").append("<b>Le joueur 2 a placé un mur horizontal</b><br>");
            $(this).addClass("lignePlaceTwo");
        } else if($(this).hasClass("lignePlace") == false  && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 2 && barriereN > 0 && wallCount.player3 > 0 ){
            $("p").append("<black>Le joueur 3 a placé un mur horizontal</black><br>");
            $(this).addClass("lignePlace3");

        } else if($(this).hasClass("lignePlace") == false  && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 3 && barriereJ > 0 && wallCount.player4 > 0 ){
            $("p").append("<j>Le joueur 4 a placé un mur horizontal</j><br>");
            $(this).addClass("lignePlacefor");

        }

    });

    $(".ligne").click(function(){

        let ligneId = {
            initial: Number($(this).attr('id')),
            second: Number(Number($(this).attr('id'))+1)
        };



        if($(this).hasClass("lignePlace") == false && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 0 && barriereR > 0 && wallCount.player1 > 0 ){
            $(this).addClass("lignePlace");
            console.log($(`div#${ligneId.second}.ligne`));
            $(`div#${ligneId.second}.ligne`).trigger('dblclick');
            baton = document.querySelector('.baton');
            document.querySelector('#top').removeChild(baton); 


            wallCount.player1--;


            if(barriereR <0){
                barriereR = barriereR - 1;}
            tour = 1;  
        }
        if($(this).hasClass("lignePlace") == false && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 1 && barriereB > 0 && wallCount.player2 > 0){  //ajoue d'un mur verticale par l'autre joueur
            $(this).addClass("lignePlaceTwo");
            $(`div#${ligneId.second}.ligne`).trigger('dblclick');
            baton = document.querySelector('.baton2');
            document.querySelector('#bottom').removeChild(baton);

            wallCount.player2--;


            if(barriereB <0){
                barriereB = barriereB - 1;}
            tour = 2;     
        }
        if($(this).hasClass("lignePlace") == false  && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 2 && barriereN > 0 &&  wallCount.player3 > 0 ){  //ajoue d'un mur verticale par l'autre joueur
        $(this).addClass("lignePlace3");
        $(`div#${ligneId.second}.ligne`).trigger('dblclick');
        baton = document.querySelector('.baton3');
        document.querySelector('#left').removeChild(baton);

        wallCount.player3--;



        if(barriereN <0){
            barriereN = barriereN - 1;}
        tour = 3;     
    } 
     if($(this).hasClass("lignePlace") == false  && $(this).hasClass("lignePlaceTwo") == false && $(this).hasClass("lignePlace3") == false && $(this).hasClass("lignePlacefor") == false && tour == 3 && barriereJ > 0 && wallCount.player4 ){  //ajoue d'un mur verticale par l'autre joueur
            $(this).addClass("lignePlacefor");
            baton = document.querySelector('.baton4');
            $(`div#${ligneId.second}.ligne`).trigger('dblclick');
            document.querySelector('#right').removeChild(baton);

            wallCount.player4--;


            if(barriereJ <0){
                barriereJ = barriereJ - 1;}
            tour = 0;     
        }
    })




       



// tour 0 cercle R et tour 1 c'est le cercle B



$(".carre").click(function (){
    if(tour == 0){
            if($(this).hasClass("cercleB") == false && $(this).hasClass("cercleN") == false && $(this).hasClass("cercleJ") == false ) {
                    posR=$(".carre.cercleR");    
                posRN= $(this); //.addClass("cercleR");
                  if ((posR[0].id  -  posRN[0].id  == -1 )||(posR[0].id  -  posRN[0].id  == +1) || (posR[0].id  -  posRN[0].id  ==-9 )||(posR[0].id  -  posRN[0].id == +9)){
                    
                    $("p").append("<r>Le joueur 1 a déplacé son pion.</r><br>");

                    
                    if(posR.attr("id") == $(".lignePlace").attr("id")  ){
                        // do nothing
                        console.log("valid"); // bloquage du mur pas fini...
                    }

                    

                     else {
                    $(".carre").removeClass("cercleR");
                    $(this).addClass("cercleR");
                    tour = 1;
                     }}
                  else{
                    tour = 0;
                     }





             
       }
    }

    else if( tour ==1){
        if($(this).hasClass("cercleR") == false && $(this).hasClass("cercleN") == false && $(this).hasClass("cercleJ") == false) {
           posB=$(".carre.cercleB");
            posBN = $(this); //.addClass("cercleB");
            if ((posB[0].id - posBN[0].id == -1) ||(posB[0].id - posBN[0].id ==+1)  ||(posB[0].id - posBN[0].id ==-9)||(posB[0].id - posBN[0].id== +9))
            {
                $("p").append("<b>Le joueur 2 a déplacé son pion.</r><b> </br>");
                $(".carre").removeClass("cercleB");
                $(this).addClass("cercleB");
            tour = 2;
            }
            else{
             tour =1;
            }
    
       }
    }
    else if( tour ==2){
        if($(this).hasClass("cercleR") == false && $(this).hasClass("cercleB") == false && $(this).hasClass("cercleJ") == false) {
           posN=$(".carre.cercleN");
            posNN = $(this); //.addClass("cercleB");
            if ((posN[0].id - posNN[0].id == -1) ||(posN[0].id - posNN[0].id ==+1)  ||(posN[0].id - posNN[0].id ==-9)||(posN[0].id - posNN[0].id== +9))
            {
                $("p").append("<black>Le joueur 3 a déplacé son pion.</r><black> </br>");
                $(".carre").removeClass("cercleN");
                $(this).addClass("cercleN");
            tour = 3;
            }
            else{
             tour =2;
            }
    
       }
    }

    else if( tour ==3){
        if($(this).hasClass("cercleR") == false && $(this).hasClass("cercleN") == false && $(this).hasClass("cercleB") == false) {
           posJ=$(".carre.cercleJ");
            posJN = $(this); //.addClass("cercleB");
            if ((posJ[0].id - posJN[0].id == -1) ||(posJ[0].id - posJN[0].id ==+1)  ||(posJ[0].id - posJN[0].id ==-9)||(posJ[0].id - posJN[0].id== +9))
            {
                $("p").append("<j>Le joueur 4 a déplacé son pion.</r><j></br>");
                $(".carre").removeClass("cercleJ");
                $(this).addClass("cercleJ");
            tour = 0;
            }
            else{
             tour =3;
            }
    
       }
    }
});
 }

function init(){
    let identCar = 0;
    let identMur = 0;
    let identLigne = 0;

    for(b = 0; b < 10; b = b + 1){
        let element = document.createElement("div");
        element.classList.add("baton");
        document.querySelector('#top').appendChild(element);
    }
    for(a = 10; a < 20; a = a + 1){
        let element = document.createElement("div");
        element.classList.add("baton2");
        document.querySelector('#bottom').appendChild(element);
    }
    for(c = 20; c < 30; c = c + 1){
        let element = document.createElement("div");
        element.classList.add("baton3");
        document.querySelector('#left').appendChild(element);
    }
    for(d = 30; d < 40; d = d + 1){
        let element = document.createElement("div");
        element.classList.add("baton4");
        document.querySelector('#right').appendChild(element);
    }

    
    //creation des murs et des cases du jeu 

    for(let i = 0; i < 17; i = i + 1){
        for(let j = 0; j < 17; j = j + 1) {
            if(i % 2 == 0) {
                if(j % 2 == 0){
                    let element = document.createElement("div");

                    element.classList.add('carre');
                    element.id = identCar;
                    identCar = identCar + 1;
                    document.querySelector('#container').appendChild(element);

                }
                if(j % 2 != 0){
                    let element = document.createElement("div");

                    element.classList.add("mur");
                    element.id = identMur;
                    identMur = identMur + 1;
                    document.querySelector('#container').appendChild(element);
                }
            }
            else if(i % 2 != 0){
            if(j % 2 == 0){  
                let element = document.createElement("div");

                element.classList.add("ligne");
                element.id = identLigne;
                identLigne = identLigne + 1;
                document.querySelector('#container').appendChild(element);
        }
        }
    }
}
 quoridor();
}
init();