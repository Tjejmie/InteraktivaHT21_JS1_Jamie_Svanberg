
// modifiera sum() tills testet blir godkänt!
function sumFunction(a, b) {

    return a + b
}

function myOwnMultiplyFunction(a, b) {
    return a * b
}

function round(a) {
    return Math.round(a)
}

function addingUp(a) {
    
    let result = 0

    for (let i = 1; i <= a; i +=1){
        result += i
    }
    return result
}

function afterXmasEve2020(date) {
    const christmas = new Date('2020-12-24')

    return new Date(date) >= new Date(christmas)
}

function sortByStringLength(array) {

    array.sort((a, b) => a.length - b.length); 
    return array
}

function removeLeadingTrailing(number)
{
    return +number
}

function getKeysAndValues(object){
    let a = []
    let b = []

    for (let property in object)
    {
        a.push(property)
        b.push(object[property])
    }

    let result = {
        keys: a,
        values: b
    }
    return result
}

function sortNumbers(array, num)
{
    if (num === 1)
    array.sort(function(a, b){return a-b})
    
    else if (num === -1)
    array.sort(function(a, b){return b-a})
    return array
}

function charCounter(letter, sentence)
{
    let Count = 0;
    for (let i = 0; i < sentence.length; i++) 
    {
       if (sentence.toLowerCase().charAt(i) == letter) 
         {
            Count += 1
         }
     }
     return Count;
   }

function doublePrice(a){
    let Result = []
    a.forEach(a =>
        {
            let b = {
                name: a.name,
                price: a.price * 2
            }
            Result.push(b)
        });
    return Result
}

function personFactory(fname, lname)
{
    return person = {
        firstname: fistLetter(fname),
        lastname: fistLetter(lname),
        initials: `${fistLetterReturn(fname)}.${fistLetterReturn(lname)}`
    }
}

function fistLetterReturn(string){
    return string.charAt(0).toUpperCase()
}

function fistLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}



function numbersOnly(array){
    return array.filter(Number.isInteger)
}

function and(a, b){ 
    if (a === true && a === b)
        return true
    else
        return false
}


function findMinMax(array){
    let result = {
        min: Math.min.apply(null, array),
        max: Math.max.apply(null, array)
    }
    return result
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(number) {
    if(number > 0)
    return false
    else
    return true
}


// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sumFunction
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
