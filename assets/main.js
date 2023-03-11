var td = document.querySelectorAll('td');
var montant = parseInt(td[1].innerText) ;
var qte = parseInt(td[2].innerText) ;
console.log(montant * qte);
td[3].innerHTML = montant * qte ;

function moins(){
    var qte = parseInt(document.getElementById('qte').innerText);
    var td = document.querySelectorAll('td');
    var prixUnitaire = parseInt(td[1].innerText) ;
    if(qte >= 2 ){
        qte = qte - 1;
        document.getElementById('qte').innerHTML = qte ;
        td[3].innerHTML = prixUnitaire * qte ;
    }
    total();
}

function plus(){
    var qte = parseInt(document.getElementById('qte').innerText);
    var td = document.querySelectorAll('td');
    var prixUnitaire = parseInt(td[1].innerText) ;
    qte = qte +1;
    document.getElementById('qte').innerHTML= qte ;
    td[3].innerHTML = prixUnitaire * qte ;
    total();
}
window.addEventListener('load', (total) => {
    var total = 0;
    var arrayLignes = document.getElementById("tbody").rows;
    var longueur = arrayLignes.length;
    for(var i=0; i<longueur; i++)
    {
        var arrayColonnes = arrayLignes[i].cells;
        var prixUnitaire = parseInt(arrayColonnes[2].innerText); 
        var qte = parseInt(document.getElementById('qte').innerText); 
        console.log(arrayColonnes[4]);
        arrayColonnes[4].innerHTML = prixUnitaire * qte ; 
        total = total + parseInt(arrayColonnes[4].innerText);
        document.getElementById('total').innerHTML = total ;
    }
  });

function total(){
    var total = 0;
    var arrayLignes = document.getElementById("tbody").rows;
    var longueur = arrayLignes.length;
    for(var i=0; i<longueur; i++)
    {
        var arrayColonnes = arrayLignes[i].cells;
        var prixUnitaire = parseInt(arrayColonnes[2].innerText); 
        var qte = parseInt(document.getElementById('qte').innerText); 
        console.log(arrayColonnes[4]);
        arrayColonnes[4].innerHTML = prixUnitaire * qte ; 
        total = total + parseInt(arrayColonnes[4].innerText);
        document.getElementById('total').innerHTML = total ;
    }
}

