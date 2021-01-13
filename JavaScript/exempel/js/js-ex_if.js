/** JS villkorssatser
 * några if-exempel
 *
 */
//Ett sannt villkor
if (1 < 2) {
  console.log('detta syns för att det är sant')
}
//ett falskt villkor
if (1 > 2) {
  console.log('detta syns inte')
}
//kom ihåg "ctrl" + "SHIFT" + p => Format code
let num1 = 6

if(num1 <= 5) {
    console.log(num1 + ' är mindre eller likt 5')
} else {
    console.log(num1 + ' är större än 5')
}

let firstname = 'Paul'

if(firstname === 'Paul') {
    console.log('Hej Paul');
} else {
    console.log('Hej Guest')
}

//typeOf returnar värdet på data
let datatype = typeof(firstname)
console.log(datatype)
//söker elementet med class="ex1" och skriver in värdet på datatype
document.querySelector('.ex1').innerHTML = datatype

let age = 43
let validAge //deklarer variabel utan värde

if(age >= 18) {
    validAge = 'Du är myndig'
} else {
    validAge = 'Du är minderårig'
}
//skriver ut värdet på validAge i element med class="ex2"
document.querySelector('.ex2').innerHTML = validAge