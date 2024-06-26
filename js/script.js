
//* Snack 3

// creo array oggetti


const biciclette = [
    {
        nome: 'XR4',
        peso: 6.8,
    },
    {
        nome: 'Cervélo R5',
        peso: 7,
    },
    {
        nome: 'Trek Emonda SLR',
        peso: 8,
    },
    {
        nome: 'Wilier Triestina Zero SLR',
        peso: 9,
    },
];
console.log (biciclette);

//FUNZIONE PER TROVARE IL PESO MINIMO
const pesoMinimo = Math.min(...biciclette.map(bici => bici.peso));

//FILTRO PER TROVARE LA BICI CON IL PESO MINIMO
const biciclettaLeggera = biciclette.filter(bici => bici.peso === pesoMinimo);

console.log (biciclettaLeggera);

//* SNACK 4

const squadreCalcio = [
    {
        name: 'Roma',
        puntiFatti: 0,
        falliSubiti:0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti:0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti:0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti:0
    },
];



//funzione numeri casuali 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//assegno i numeri casuali a puntiFatti e falliSubiti
for (let i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].puntiFatti = getRandomInt(0, 100);
    squadreCalcio[i].falliSubiti = getRandomInt(0, 100);
}

console.log(squadreCalcio);