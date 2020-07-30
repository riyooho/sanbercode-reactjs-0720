// soal 1
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(firstName, lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName()

// soal 2
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)

// soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)