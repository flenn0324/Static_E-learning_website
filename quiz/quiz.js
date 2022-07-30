/*fonction note() est la fonction qui calcule la note de l'utilisateur*/
/* elle permis a la fin aussi d'afficher les bonnes reponses en vert et les mauvaises en rouge*/
/* aussi elle permis dafficher la note a l'utilisateur*/
function note()
{
    var i;
    var point = 0;
    /*l'utilisation d'une Tab qui contient les ID de tout les reponses du Quiz*/
    tab = ['q01' , 'q02' ,'q11' , 'q12' ,'q21' , 'q22' ,'q31' , 'q32','q41' ,'q42','q51' , 'q52','q61' , 'q62','q71' , 'q72','q81' , 'q82','q91' , 'q92' , 'q001' , 'q002' ,'q011' , 'q012' ,'q021' , 'q022' ,'q031' , 'q032','q041' ,'q042',
           'q051' , 'q052','q061' , 'q062','q071' , 'q072','q081' , 'q082','q091' , 'q092'];
    
    /* Tab_juste est une tab qui contient les ID des reponses juste seulement*/
    tab_juste = ['q01' , 'q12' , 'q22' , 'q32', 'q41' ,'q51' , 'q62', 'q72', 'q81','q92','q001' , 'q012' , 'q022' , 'q032', 'q041' ,'q051' , 'q062', 'q072', 'q081','q092' ];

    for (i=0;i<tab.length;i++)/*boucle sur le tableau des reponses*/
        {
            var element = document.getElementById(tab[i]);
            /*verifie si l'utilisateur a repondu */
            if (element.checked) /* Si oui*/
            {
                var j=0;
                var rep = false;
                while ( j < tab_juste.length && !rep )/* boucle sur la tab des reponses juste*/
                {
                    /*verifie si la reponse est correct*/
                    if (tab[i] === tab_juste[j]) /*Si oui*/
                    {
                        rep = true;
                        point = point + 1 ; /*ajouter un point a la note */
                    }
                   j++; 
                }
                /*Les ID Label correspand a la reponse(input=radio) sont representès avec le meme ID de la reponse en ajoutant la lettre "r" a la fin*/
                /*par exemple : (input id=q01 ) Label sera ( label id=q01r)*/
                var x = document.getElementById(tab[i]+'r');
                /*Si la reponse est fausse on met la couleur rouge*/
                if (rep === false)
                {
                    x.style.color='red';
                }
            }      
        }
       
    /*bouclè sur le tableau des reponses pour les mettres en vert*/
    var z;
    for(z=0;z<tab_juste.length;z++)
    {
        var y = document.getElementById(tab_juste[z]+'r');
        y.style.color='green';
    }    

    /*affichage des notes dans un alert*/
    if(point>10)
    alert("BRAVO ! Votre note est " + point + "/20 vous avez réussi <3\nCliquez sur OK pour voir vos erreurs et les bonnes reponses ");
    else
    alert("Dommage ! Votre note est " + point + "/20 vous devez revoir les cours ! \nCliquez sur OK pour voir vos erreurs et les bonnes reponses");

    /*affichage de la note dans la page de quiz*/
    document.getElementById('point').innerHTML= point ;
    document.getElementById('resultat').style.visibility = "visible";
    document.getElementById('valider').style.display = "none" ;
}