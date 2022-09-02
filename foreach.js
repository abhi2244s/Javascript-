let arr = ['Abhishek', 10, 'Hitesh', true]
// console.log(arr)
// for (let elem of arr){
//     if(typeof elem ==="number"){
//         console.log(elem)
//     }
// }


arr.forEach(function(ele,index) {
    if (typeof ele === "string"){
        console.log(ele,index)
    }
});