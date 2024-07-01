const colorize = ()=>{
    const i = Math.floor(Math.random()*255);
    const j = Math.floor(Math.random()*255);
    const k = Math.floor(Math.random()*255);
  return `rgb(${i},${j},${k})`;
}

const buttons = document.querySelectorAll('button');


const gantibagian=()=>{
  this.style.backgroundColor=colorize();
}


for (let button of buttons) {
  button.addEventListener('click',gantibagian)
}

