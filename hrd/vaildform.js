const today = new Date()
console.log(today)

console.log('year' + today.getFullYear())
console.log('month' + today.getMonth())
console.log('date' + today.getDate())
let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')
console.log(result)
const month = today.getMonth()+1
console.log([today.getFullYear(),today.getMonth.toString(),padstart(2,0),today.getDate()].join('-'))
console.log(result)