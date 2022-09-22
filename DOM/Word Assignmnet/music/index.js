function play1(){
    let myvideo1 = document.getElementById('myvideo1')
    myvideo1.play()
    
}


function pause1(){
    let myvideo1 = document.getElementById('myvideo1')
    myvideo1.pause()
}
function play2(){
    let myvideo2 = document.getElementById('myvideo2')
    myvideo2.play()
    
}


function pause2(){
    let myvideo2 = document.getElementById('myvideo2')
    myvideo2.pause()
}
function play3(){
    let myvideo3 = document.getElementById('myvideo3')
    myvideo3.play()
    
}


function pause3(){
    let myvideo3 = document.getElementById('myvideo3')
    myvideo3.pause()
}
function play4(){
    let myvideo4 = document.getElementById('myvideo4')
    myvideo4.play()
    
}


function pause4(){
    let myvideo4 = document.getElementById('myvideo4')
    myvideo4.pause()
}
function ring1(){
   let ring1 = document.getElementById('rngVolume1').value
   let myvideo1 = document.getElementById('myvideo1')
   myvideo1.volume= ring1

}
function ring2(){
    let ring2 = document.getElementById('rngVolume2').value
    let myvideo2 = document.getElementById('myvideo2')
    myvideo2.volume= ring2
}

function ring3(){

    let ring3 = document.getElementById('rngVolume3').value
    let myvideo3 = document.getElementById('myvideo3')
    myvideo3.volume= ring3
}

function ring4(){
 
    let ring4 = document.getElementById('rngVolume4').value
    let myvideo4 = document.getElementById('myvideo4')
    myvideo4.volume= ring4
}
let rngVolume1 = document.getElementById('rngVolume1')

rngVolume1.addEventListener('click',ring1)

let rngVolume2 = document.getElementById('rngVolume2')

rngVolume2.addEventListener('click',ring2)

let rngVolume3 = document.getElementById('rngVolume3')

rngVolume3.addEventListener('click',ring3)

let rngVolume4 = document.getElementById('rngVolume4')

rngVolume4.addEventListener('click',ring4)