let awal = prompt("Enter what you want to do:\n (new, list, delete, quit)");
let list = [];
let del ='';

while (awal !== "quit") {
  if (awal === "new") {
    list.push(prompt("Enter your new list:"));
  }
  else if(awal==='list'){
    for (let i=0;i<list.length; i++){
        alert(`${i+1}.||${list[i]}`)
        }
  }
  else if(awal==='delete'){
    del=prompt("Enter your list you want to delete:")
    for(i=0;i<list.length;i++){
        if(del===list[i]){
            list.splice(i,1)
            break;
        }
        del=false;
    }
    if(del===false){
        alert("no entries")
    }
  }

  awal = prompt("Enter what you want to do:\n (new, list, delete, quit)");
}

for (let i=0;i<list.length; i++){
console.log(`${i+1}.||${list[i]}`)
}
alert("QUITTING APPLICATION");
