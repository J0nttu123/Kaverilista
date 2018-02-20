var kamut = ["Mauno", "Pekka", "Jarmo","Kalle","Valtteri"];

function lisaaKaveri(){
    var nimi = window.prompt("Anna kaverin nimi");
    kamut.push();
    console.log(kamut);

    listaaKaverit();
}

function listaaKaverit(){

    document.getElementById('frendit').innerHTML = '';

    for (var i=0; i < kamut.length; i++){
        document.getElementById('frendit').innerHTML += '<li>' + kamut[i] + '</li>';
    }
}


// kamut.push('yeet');

