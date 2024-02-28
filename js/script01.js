// FUNZIONI

function randomNum(min, max) {
  const number = Math.floor(Math.random() * max + min)
  return number 
}

function lowerCaseWord(word) {
  let lowercased = word.toLowerCase()
  return lowercased
}

function isEven(num) {
  const remainder = num % 2
  return remainder === 0
}

// // PARI O DISPARI

let userChoice
let userNum

// // Faccio scegliere all'utente pari o dispari

do {
  userChoice = lowerCaseWord(prompt('Pari o dispari?')) 
} while (userChoice !== 'pari' && userChoice !== 'dispari');

// // Faccio scegliere all'utente un numero da 1 a 5

do {
  userNum = parseInt(prompt('Inserisci un numero da 1 a 5'))
} while (userNum < 1 || userNum > 5 || isNaN(userNum));

// // Genero un numero random per il pc

let pcNum = randomNum(1, 5)
console.log('il numero del pc è:', pcNum)
console.log('il tuo numero è:', userNum)

// // Stabilisco se la somma è pari o dispari

let sum = userNum + pcNum
if (isEven(sum) === true && userChoice === 'pari' ||
  isEven(sum) === false && userChoice === 'dispari') {

// // Comunico il vincitore

  console.log('Hai vinto!')

} else {

  // // Comunico il vincitore
  
  console.log('hai perso!')

}


