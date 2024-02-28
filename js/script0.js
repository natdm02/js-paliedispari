// 1. 

function lowercaseWord(word) {
  let lowercased = word.toLowerCase()
  return lowercased
}


// 2. 

function invert(word) {
  let splittedWord = word.split('')
  let inverted = splittedWord.reverse()
  return inverted
}

// 3. 

function isEqual(splittedWord1, splittedWord2) {
  let message

  for (let i = 0; i < splittedWord2.length; i++) 
  {
      if (splittedWord1[i] === splittedWord2[i]) {
          console.log('la lettera è uguale')
          message = true

      } else {
          console.log('la lettera è diversa')
          message = false
          break;
      }
  }

  console.log(message)
  return message
}


// 4. 

function isPalindrome(word) {

  let lowercased = lowercaseWord(word)
  let splittedInverted = invert(lowercased)
  let splittedOriginal = lowercased.split('')

  if (isEqual(splittedInverted, splittedOriginal) === true) {
      console.log('la parola', word,'è palindroma')
      
  } else {
      console.log('la parola', word,'non è palindroma')

  }
}
  


// 5.

let userWord = prompt ('scrivi una parola')
isPalindrome(userWord)