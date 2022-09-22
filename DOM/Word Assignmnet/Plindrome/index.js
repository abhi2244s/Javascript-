

// let input = document.getElementById('input').value;
let para = document.getElementById('para')

let btn = document.getElementById('button')

function palindrome(){
    let input = document.getElementById('input').value;
  

    let str = input.length;

    for(let i =0; i<str/2; i++){
       if(input[i]!=input[str-1-i]){
         para.textContent = `${input} is :` + " Not palindrome"
       }
       if(input[i]==input[str-1-i]){
       para.textContent = `${input} is :` + " Palindrome"
       }
       
    }
   

  
   
    
}


btn.addEventListener('click',palindrome)