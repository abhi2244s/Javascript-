let btn = document.getElementById('button');


function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    let div = document.getElementById('canvas')
    div.style.backgroundColor = bgColor

   
}



btn.addEventListener('click',randomColor)