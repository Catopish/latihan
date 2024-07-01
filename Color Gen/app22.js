const bagH1 = document.querySelector('h1');
const bagbody = document.querySelector('body');
const btn= document.querySelector('#generator');

btn.addEventListener('click',()=>{
    let i = Math.floor(Math.random()*255);
    let j = Math.floor(Math.random()*255);
    let k = Math.floor(Math.random()*255);
    bagbody.style.backgroundColor=`rgb(${i},${j},${k})`
    if(i+j+k<500){
        bagH1.style.color='white';
    }
    else{
        bagH1.style.color='black'
    }
    bagH1.innerText=`rgb(${i},${j},${k})`
})
