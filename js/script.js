
//* Snack 4

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