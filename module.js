


const arrObjs = [
    {
        name: "Bruce",
        age: 25
    },
    {
        name: "Tony",
        age:30
    },
    {
        name: "Steve",
        age:70
    }
]

let sum = arrObjs.reduce(function(sum, element)
{
    return sum + element.ege
})
console.log(sum)