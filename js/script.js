// palidroma 

console.log('js-paliedispari');
const output1 = document.querySelector('.output1');

const parola = prompt('Inserisci una parola');
console.log(parola);

const parolaSplit = parola.split('');
console.log(parolaSplit);

let parolaInvertita = '';
for (let i = parolaSplit.length - 1; i >= 0; i--) {
  parolaInvertita = parolaSplit[i];
  
}

function showMessage() {
  if (parola === parolaInvertita) {
    output1.innerHTML += `
    La parola ${parola} é un palindroma
    `;
  }else{
    output1.innerHTML += `
    La parola ${parola} non é un palindroma
    `;
  }
}

showMessage();

const output2 = document.querySelector('.output2');



// pariDispari


const pariDispari = prompt('Pari o dispari?');
console.log('Hai scelto: ', pariDispari);

if (pariDispari !=='pari' && pariDispari !== 'dispari') {
  alert('Hai inserito un valore errato. Inserisci un valore corretto!');
}else{

  const numA = parseInt(prompt('Inserisci un numero da 1 a 5'));
  console.log('Numero A: ', numA);

  if (isNaN(numA)) {
    alert('Inserire un numero corretto');
  }

  const numB = getRandomNumberCpu(1, 5);
  console.log('Numero B: ', numB);

  function getRandomNumberCpu(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const somma = numA + numB;
  console.log('La somma = ',somma);

  function risultato() {
    if ((pariDispari === 'pari' && !(somma % 2) || (pariDispari === 'dispari' && (somma % 2)))) {
      output2.innerHTML += `
      Hai scelto ${pariDispari} ed é uscito ${somma} quindi hai vinto
      `;
  
    }else{
      output2.innerHTML += `
      computer ha scelto ${pariDispari} ed é uscito ${somma} quindi ha vinto il computer
      `;
    }
  }
  
  risultato();
}


