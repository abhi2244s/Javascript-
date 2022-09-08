let age = prompt("Enter your age");

function userage(age){
   if(age>=18){
    return "You can drive in india";
   }

   else if(age<18){
    return "you cannot drive in india"
   }
}

let details = userage(age)
console.log(details)