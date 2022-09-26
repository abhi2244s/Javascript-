let arr= []
let store;
function expense(){
    let cont = document.getElementById('container')
    cont.style.display ="block"
}
function add(){
    let food = document.getElementById('food').value;
    let shopping = document.getElementById('shopping').value
    let fees = document.getElementById('fees').value;
     store = Number(food) + Number(shopping) + Number(fees) ;
   
    food = ""
    shopping =""
    fees =""
    
}

function close(){
    let cont = document.getElementById('container')
    cont.style.display ="none"
    // console.log(cont)
}
function budget(){

      let remainigValue = arr - store;
      console.log(remainigValue)
      let para = document.getElementById('para')
      para.innerHTML = "Remainig budget is : " +remainigValue

      add()
      
}


function income(){
    let income = document.getElementById('income').value;
  
    arr.push(income)

    if(income ==""){
        alert("add income")
    }

    income=""
  

}


let fas = document.querySelector('.fas')

fas.addEventListener('click',close)