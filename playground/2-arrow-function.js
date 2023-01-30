//REGULAR function
// const square = function(x){
//   return x * x
// }

//**Arrow functions that can't use 'this' properites
//ARROW function
// const square = (x) => {
//   return x * x
// }

// SHORTHAND ARROW function
// const square = (x) => x * x
//
//
// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guestList: ['Marty', 'James', 'Steven', 'Cody'],
  printGuestList() {
    console.log('Guest List for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()
