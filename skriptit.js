var kamut = [];

function jarjestaFrendit(){
    kamut.sort();
    console.log(kamut);
    listaaKaverit();
}

function poistaKaveri() {
    document.getElementById("kamut");
    kamut.pop();
    console.log(kamut);
    listaaKaverit();
}


function lisaaKaveri(){

    var nimi = window.prompt("Anna kaverin nimi");
    kamut.push(nimi);
    console.log(kamut);

    listaaKaverit();
}

function listaaKaverit(){

    document.getElementById('kamut').innerHTML = '';

    for (var i=0; i < kamut.length; i++){
        document.getElementById('kamut').innerHTML += '<li>' + kamut[i] + '</li>';
    }
}

        

