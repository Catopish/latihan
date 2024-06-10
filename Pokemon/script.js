const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const cont = document.querySelector("#container");
for (let i = 1; i <= 500; i++) {
  const poki = document.createElement("img");
  poki.src = `${baseUrl}${i}.png`;
  poki.alt = `#${i}`;
  poki.addEventListener('click',()=>{
    alert(`Pokemon ke ${i}`)
  })

  const pokemon = document.createElement("div");
  const nama = document.createElement("span");
    nama.innerText = `#${i}`;
    pokemon.appendChild(poki);
    pokemon.appendChild(nama);
  cont.appendChild(pokemon);
}
