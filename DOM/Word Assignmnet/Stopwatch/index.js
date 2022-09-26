let tens = 00;
let ones = 00;
let hours = 00;
let interval;


function start(){
     interval = setInterval(display,1000) 

}
function display(){
    let span = document.getElementById('span3')
    let span2 = document.getElementById('span2')
    let span3 = document.getElementById('span1')

    ones++
    if(ones<=9){
        span.innerHTML = "0" + ones
    }
    if(ones>9){
        span.innerHTML = ones
    }
    if(ones>=60){
        tens++
        span2.innerHTML = "0" + tens + ":";
        ones = "0"
        span.innerHTML = "0"+ 0;
    }
    if(tens>=60){
        hours++
        span3.innerHTML = "0"+ hours + ":";
        tens=  "0"
        span2.innerHTML = "0"+ 0 ;

    }
}


function pause(){
   clearInterval(interval)
}

function reset(){
    clearInterval(interval)

    let span  =document.getElementById('span1').innerHTML = "00 :"
    let span2 =document.getElementById('span2').innerHTML="00 :"
    let span3  =document.getElementById('span3').innerHTML= "00"
}



