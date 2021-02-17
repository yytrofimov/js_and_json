//exempel 1: skriv ut text
function writeName() {
    return 'Paul Wallin'
}
console.log(writeName());

//exempel med parameter
function writeNamePara(firstname, lastname) {
    return firstname + ' ' + lastname
}
//vi måste ge parameter då vi kör funktionen
console.log(writeNamePara('Paul', 'Wallin'))

//Räkna area
function countArea(num) {
    return num*num
}
console.log(countArea(4))

//skriver i DOM
function writeToDom() {
    const output = document.querySelector('#output');
    output.innerHTML = 'testar onclick!'
}


const btn2 = document.querySelector('.btn.b');
//kollar med addEventListener om nån tryckt på knappen
btn2.addEventListener('click', event => {
    const output = document.querySelector('#output');
    output.innerHTML = 'text i DOM utan onclick attributet'
})
