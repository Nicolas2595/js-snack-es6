/*
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
*/

var arrayBici = [

    {
        nome: "Bici da corsa uno",
        peso: 10
    },
    {
        nome: "Bici da corsa due",
        peso: 20
    },
    {
        nome: "Bici da corsa tre",
        peso: 3
    },
    {
        nome: "Bici da corsa quattro",
        peso: 40
    },
    {
        nome: "Bici da corsa cinque",
        peso: 50
    }

];

var biciLeggera;
var biciPeso = arrayBici[0].peso;

for(var i = 0; i < arrayBici.length; i++) {

    if(arrayBici[i].peso <= biciPeso) {
        biciPeso = arrayBici[i].peso;
        biciLeggera = arrayBici[i];
    }

}

var {nome, peso} = biciLeggera;

console.log(
    `
    La bici con il peso minore è: ${nome}
    che pesa: ${peso} kg
    
    `
);