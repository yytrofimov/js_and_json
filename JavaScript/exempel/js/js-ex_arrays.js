//Javascript Arrays exempel
console.log('Arrays')

let text = 'en teckensträng'
let numbers = [1,2,3,4]
let myCars = ['Saab', 'Volvo', 'BMW']

console.log(myCars[0] + ' ' + myCars[1])

console.log(myCars.length)
//spara antal värden i arrayn:
let myCarsAmount = myCars.length
console.log(myCarsAmount)

//loopar med for-loop, räknaren börjar från 0 
for(let i=0; i<myCarsAmount; i++) {
    //i == nyckeln i arrayn
    console.log(myCars[i])
}
/*
Push ökar antalet värden
*/
myCars.push('Seat')
console.log(myCars);

//ändra teckensträng till array med split
let carList = 'saab, pösö, Mersu'
console.log(carList)
carListArray = carList.split(', ')
console.log(carListArray)