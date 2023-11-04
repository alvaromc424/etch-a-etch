const body= document.querySelector('body');
let contenedor= document.createElement('div');
contenedor.setAttribute('class','contenedor');
body.appendChild(contenedor);


function creartablero(t){
    for(let i=0;i<t*t;i++){
        let nodo=document.createElement('div');
        nodo.addEventListener('mouseover', ()=>{
        let rojo= Math.floor(Math.random()*256);
        let verde= Math.floor(Math.random()*256);
        let azul= Math.floor(Math.random()*256);
        
        nodo.style.cssText=`background-color:rgb(${rojo},${verde},${azul});`
        })
    nodo.setAttribute('class','cuadrado');
    contenedor.appendChild(nodo);
}
}
 creartablero(16);

const boton=document.createElement('button');
boton.textContent="Elegir tamaño";
body.insertBefore(boton,body.firstChild);
boton.addEventListener('click',()=>{
    let tamano=prompt("Introduce tamaño del grid:");
    if (tamano!="" && tamano<100){
        contenedor.innerHTML="";
        creartablero(tamano)
        contenedor.style.cssText=contenedor.style.cssText+"width:"+ 30*tamano+"px;";

        }
})
