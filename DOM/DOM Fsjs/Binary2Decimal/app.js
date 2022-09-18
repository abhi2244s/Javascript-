let btn = document.querySelector('.btn')



function decimal(event){
  event.preventDefault()
  let binaryInput = document.getElementById('binary');



  
  let digit =parseInt(binaryInput.value, 2)
  let span = document.getElementById('span')
  span.innerHTML = digit;
  binaryInput.value = ""

  

 
  
}
btn.addEventListener('click',decimal)