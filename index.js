const {auxLog} = require('./auxFunction.js')
const {readFile} = require('./readFile.js')


console.log("Nuestro primer script en Nodejs")

// const array = ["peras", "bananas", "maracuya", "kiwi", "manzana"]

// for (let index = 0; index < array.length; index++) {
//     const fruits = array[index];
//     console.log(fruits)
// }

auxLog()

readFile()

console.log("-----FIN------")
