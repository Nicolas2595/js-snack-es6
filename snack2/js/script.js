/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// FUNZIONI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// FINE FUNZIONI

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.

var arraySquadre = [

    {
        nome: "Bologna",
        puntiFatti:0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Verona",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },

];

console.log(arraySquadre);

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

var arraySquadreNuovo = [];

for(var i = 0; i < arraySquadre.length; i++) {

    arraySquadre[i].puntiFatti = getRandomNumber(0, 100);
    arraySquadre[i].falliSubiti = getRandomNumber(0, 100);

    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

    var statistiche = {};
        
        // statistiche.nome = arraySquadre[i].nome;
        // statistiche.falliSubiti = arraySquadre[i].falliSubiti;

        var {nome, falliSubiti} = arraySquadre[i];

        arraySquadreNuovo.push({nome, falliSubiti});
        console.log(`${nome} ha subito ${falliSubiti} falli`);

}

console.log(arraySquadreNuovo);