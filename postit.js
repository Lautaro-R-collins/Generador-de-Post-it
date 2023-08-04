let crearNuevo = document.getElementsByClassName('crearNuevo')[0];
let notas = document.getElementsByClassName('notas')[0];
let input = document.getElementById('userInput');
let i = 0;

document.getElementById("crear").addEventListener("click", function(){
    crearNuevo.style.display = "block";
    input.focus();
});


input.addEventListener('dblclick', content);

function content(){
    divStyle(input.value);
    input.value = ""; 
    crearNuevo.style.display = "none";
}

function color(){
    let randomcolor = [    "#FAD02E", "#F3A2B6", "#B2DBBF", "#A7CBD9", "#C5DCA0", "#F6D1BC", "#F1B9A4",
    "#F0EAD6", "#C2B6B1", "#FFC3A0", "#C8E7ED", "#A4B0BD", "#E1D5E7", "#FCB9AA",
    "#D4E8D3", "#E5E59E", "#D1D0D7", "#E1D1D1", "#C6D68F", "#D3F6DB", "#B0E0E6",
    "#F0C987", "#F4D9DE", "#F0C987", "#C5EDF0", "#A4D3D8", "#CDEAC0", "#B9C8A2",
    "#C0BBE1", "#F8C3CD", "#D7E3D0", "#CBE7B8", "#F6D2B1", "#D9E8A4", "#FAD6A5",
    "#C5CBE3", "#E1CBA5", "#D8D3C8"];
    if(i > randomcolor.length - 1){
        i = 0;
    }
    return randomcolor[i++];
}

function divStyle(text){
    let div = document.createElement("div"); 
    div.className = 'nota';
    div.innerHTML = '<div class="details">'+'<h3>'+text+'</h3>'+'</div>';

    notas.appendChild(div);


//remover los postit

div.addEventListener("dblclick", function(){
    div.remove();
})

div.setAttribute('style', 'background:'+color()+'');

notas.appendChild(div)
}
