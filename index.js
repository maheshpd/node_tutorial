const app = require('./app')

var a = 20
const arr = [2,3,4,5,6,3,7,8,89]
//console.log(arr[3])
//console.log(app.firstName+ ' And '+ app.lastName+ " " +app.z())
// console.log(arr)

/*
let result = arr.filter((item)=>{
    return item === 3
})
*/

let result = arr.filter((item) => {
    return item > 5
})
console.log(result)