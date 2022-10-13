let nomi = ['Salvatore', 'Salvo','Mario', 'Giacomo', 'Simone', 'Andrea','Gianluca','Paolo','Francesco'];
let cognomi = ['Rossi', 'Pepe','Villano','Giangiacomo','Silu','Abate','Pio','Fortino','Granata'];
let btn = document.getElementById('esegui')
let personeRandom = document.getElementById('personeRandom')

let randomize = function(){
    for(let i = 0; i < 10; i++){
        let nomeRandom = nomi[Math.floor(Math.random() * nomi.length)];
        let cognomeRandom = cognomi[Math.floor(Math.random() * cognomi.length)];
        personeRandom.innerHTML += `${nomeRandom}  ${cognomeRandom} <br> <br>`
    }
    
}
btn.addEventListener('click', randomize)