console.log("Hello")

// getting all elements from DOM
const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")

const passwordGenerateForm = document.getElementById("passwordGenerateForm")

const includeUpperCaseElement = document.getElementById("includeUpperCase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")

const passwordDisplayElement = document.getElementById("passwordDisplay")
// To sync both range and input for password character length

characterAmountRange.addEventListener('input',characterAmountSync)
characterAmountNumber.addEventListener('input',characterAmountSync)

function characterAmountSync(e) {
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}  

// ASCII CODES 

const LOWER_CASE_ASCII_CODES = arrayFromLowToHigh(97,122)
const UPPER_CASE_ASCII_CODES = arrayFromLowToHigh(65,90)
const NUMBERS_ASCII_CODES = arrayFromLowToHigh(48,57)
const SYMBOLS_ASCII_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126))


passwordGenerateForm.addEventListener('submit',e=>{
// prevent page reload when submitting form
    e.preventDefault() 

    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)

    passwordDisplayElement.innerText = password.join("")

})

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols){
    console.log(`Character Amount - ${characterAmount}, Upper Case = ${includeUpperCase}, Numbers = ${includeNumbers}, Symbols = ${includeSymbols}`)

    let asciiCodes = LOWER_CASE_ASCII_CODES;

    if (includeUpperCase) asciiCodes = asciiCodes.concat(UPPER_CASE_ASCII_CODES)

    if (includeNumbers) asciiCodes = asciiCodes.concat(NUMBERS_ASCII_CODES)

    if (includeSymbols) asciiCodes = asciiCodes.concat(SYMBOLS_ASCII_CODES)

    let password = []
    for (let i=0; i<=characterAmount; i++){
    // Selecting any random value value of ASCII Codes
    let randomValue = Math.floor(Math.random()*asciiCodes.length)   
    let randomAsciiCode = asciiCodes[randomValue]
    let randomCharacter = String.fromCharCode(randomAsciiCode)
    
    password.push(randomCharacter)
    }
    return password
}


// Function to Create array of numbers - ASCII Code reference for characters
function arrayFromLowToHigh(low, high){
    const array = []
    for (let i=low; i<=high; i++){
        array.push(i)
    }
    return array
}