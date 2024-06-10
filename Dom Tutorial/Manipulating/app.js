const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const banner = document.getElementById('banner')

const paragraph = document.querySelector('p');
paragraph.style.backgroundColor='olive'


paragraph.classList.add(`purple`);
paragraph.classList.remove(`purple`);
paragraph.classList.add(`purple`);
paragraph.classList.toggle(`purple`);
paragraph.classList.toggle(`purple`);
//paragraph.classList.toggle(`purple`);

const h1 = document.createElement('h1');
h1.append('ayam sutra');
const judul = document.querySelector('h1');
judul.insertAdjacentElement('afterend', h1);

const gambarAyam = document.createElement('img');

gambarAyam.src = `https://plus.unsplash.com/premium_photo-1664304277620-e1fd0dd4fe52?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
const para = document.querySelector('p');
para.appendChild(gambarAyam);
gambarAyam.classList.add(`square`)

