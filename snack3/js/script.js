let numeri = [4, 77, 22, 11, 68, 382, 38, 559, 1929];
let totale = 0;
    for(let i = 0; i < numeri.length; i++){
    let pari = numeri[i] % 2;
    if(pari != 0){
        let numeriDispari = numeri[i];
         totale += numeriDispari;
    }
}
console.log(totale);