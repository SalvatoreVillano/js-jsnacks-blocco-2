let numero = document.getElementById('num');
let risultato = document.getElementById('risultato');
let btn = document.getElementById('calcola');

let calcola = function (){
    let paridispari = numero.value % 2;
    if(paridispari == 0){
        risultato.innerHTML = 'Il tuo numero è pari.'
    }else{
        paridispari = numero.value;
        paridispari++;
        risultato.innerHTML = 'Il numero pari successivo a quello che hai inserito tu è: ' + paridispari;
    }
 }
btn.addEventListener('click', calcola)
