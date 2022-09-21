// const container;
// const error;

function getAge(birthday){
  let userInput = document.getElementById('dob').value;
  console.log(userInput)


  
  // console.log(birthday)
  calcAge(userInput)
  


  
}



function calcAge(element){ 
  
  let dob = new Date(element);
  console.log(dob.getTime())

  let monthDiff = Date.now() - dob.getTime();
  // console.log(monthDiff)

  let ageDt = new Date(monthDiff);  
  console.log(ageDt) 
  let year = ageDt.getUTCFullYear();  
  console.log(year)
  let age = Math.abs(year - 1970);  
  displayAge(age)
} 

function displayAge(elem){
    
    let span = document.getElementById('span')
    span.innerHTML = elem
    
}

