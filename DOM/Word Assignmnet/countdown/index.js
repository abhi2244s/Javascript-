function counterStart() {
  let interval;

  let input = document.getElementById("input").value;
  let output = Number(input);

  for (let i = output - 1; i >= 0; i--) {
    interval = setTimeout(() => {
      display(i, output);
    }, 1000 * (output - i));
  }

  output = "";
}

function display(i, output) {
  let p = document.getElementById("para");
  p.innerHTML = i;
}

// for(let i = output;i>=0; i--){
//          interval = setTimeout(function(){
//             console.log(i)
//         display(i)
//     },1000*(output-1-i))
