//배열정렬 sort

const points = [40,100,1,15,11,25]
console.log("초기값 :" + points)
points.sort()
console.log("정렬" + points)
points.reverse
console.log("역순" + + points)

points.sort(function(a,b){
    return a-b
})
console.log("number sort " + points)
points.sort(function(a,b){
    return b-a
})
console.log("number reverse sort " + points)
points.sort(function(a,b){
    
})

//String
const fruits = ['banana','orange','mango','apple','carrot']
console.log('초기값' + fruits )
fruits.sort()
console.log('정렬'+ fruits)
fruits.reverse()
console.log("역순" + fruits)

const cars = [{type: 'volvo' ,year:2016},
{type: 'saab' ,year:2001},
{type: 'BMW',year:2010}
]

//
cars.sort(function(a,b){
    return a.year-b.year
})
console.log('car sorted by year::')
cars.forEach(value => console.log(value))
cars.sort(function(a,b){
    if(a.type<b.type) return -1
    else return 1
})
console.log('sort cars bt type::')
cars.forEach(value => console.log(value))

//sort cars by type diregarding uppper 
function type_reverse(a,b){
    if(b.type<a.type) return -1
    else return 1
}
cars.sort(function(a,b){
    if(b.type.toLowerCase<a.type.toLowerCase) return -1
    else return 1 

})

console.log('reverse::')
cars.forEach(value => console.log(value))

cars.sort(type_reverse)
console.log('car uppno::')
cars.forEach(value => console.log(value))
