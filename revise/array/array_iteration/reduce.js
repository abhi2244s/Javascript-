const numbers = [45, 4, 9, 16, 25];


function sum(acc,curr){
    return acc+curr
}



const output = numbers.reduce(sum)

console.log(output)