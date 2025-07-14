// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const raceBikes = [
  {
    brand: "bianchi",
    kg: 5.8
  },
  {
    brand: "specialized",
    kg: 5.5
  },
  {
    brand: "cervelo",
    kg: 6.2
  },
  {
    brand: "scott",
    kg: 7.4
  }
]

console.log(raceBikes)

let raceBike = raceBikes[0]

for (i = 0; i < raceBikes.length; i++) {

  if (raceBikes[i].kg < raceBike.kg) {
    raceBike = raceBikes[i]
  }
}

console.log(raceBike)



// Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const clubs = [
  {
    team: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    team: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    team: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    team: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    team: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    team: "Atalanta",
    puntiFatti: 0,
    falliSubiti: 0
  },
]

for (i = 0; i < clubs.length; i++) {
  clubs[i].puntiFatti = Math.floor(Math.random() * (100 - 50 + 1)) + 50
  clubs[i].falliSubiti = Math.floor(Math.random() * (200 - 100 + 1)) + 100
}


console.log(clubs)