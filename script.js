

//let globalValor = 16;


/*for (let fil=1;fil<=globalValor;fil++){
    let div = document.createElement('div');
    div.classList.add('Fila');
    //div.textContent= 'Im the lead of row '+fil+' Col 1';
    container.appendChild(div);
    for(let col=1;col<=16;col++){
        let div2 = document.createElement('div');
        div2.classList.add('C' + col.toString());
        div2.textContent= 'Im the col' +col;
        div.appendChild(div2);
        div2.remove;
    }
    div.remove;
}
*/

generaGrid(16);


function generaGrid (globalValor){


    let container = document.createElement('container');
    let body = document.querySelector('body');

    body.appendChild(container);

    let button = document.createElement('button');
    body.insertBefore(button, container);
    button.textContent= "CLEAR";


    //let container = document.createElement('container');
    body.appendChild(container);

    for (let fil=1;fil<=globalValor;fil++){
        let div = document.createElement('div');
        div.classList.add('Fila');
        //div.textContent= 'Im the lead of row '+fil+' Col 1';
        container.appendChild(div);
        for(let col=1;col<=globalValor;col++){
            let div2 = document.createElement('div');
            div2.classList.add('C' + col.toString());
            div2.textContent= 'Im the col' +col;
            div.appendChild(div2);
            div2.remove;
        }
        div.remove;
    }

    let colorea = document.querySelectorAll('div');
    //console.log(colorea.length);



    colorea.forEach((div) => { div.addEventListener('mouseover', function(ev) {
    
    if(div.className != 'Fila'){
   // ev.stopPropagation;
    coloreaSquare(div)
    
    }
    
    });
    
});

    button.addEventListener('click', function(ev) {
    
    colorea.forEach((div) => decolorea(div));
    body.removeChild(container);
    let peticion = prompt('Que tamanyo quieres?');
    peticion = parseInt(peticion);
    //globalValor = peticion;
    colorea.forEach((div) =>{ 
        console.log(div.className);
        //if(div.className === 'Fila') container.removeChild(div);
        div.remove();
        

    });
    //let auxilio = document.querySelectorAll('div');
    //console.log(auxilio.length);
    
    button.remove();

    generaGrid(peticion);
    
    });
}





/*console.log(container.innerHTML);

let aux = document.querySelectorAll('div');
aux.forEach((div) => {
    console.log(div.textContent);

});*/





function coloreaSquare(divisor) {

    
    divisor.style.backgroundColor = 'red';


}

function decolorea(divisor){

    divisor.style.backgroundColor = 'white';
}




