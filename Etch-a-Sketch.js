

let flexContainer = document.createElement("div");
flexContainer.setAttribute("class", "flex-container");

document.body.appendChild(flexContainer);
         
console.log(createSquares());

function createSquares(){
    for(i = 0; i < 16; i++){
        let squareContainer = document.createElement("div");
        squareContainer.setAttribute("class", "square-container");

        for(j = 0; j < 16; j++){
            let square = document.createElement("div");
            square.setAttribute("class","square");
            square.addEventListener("mouseover",changeColor)
            squareContainer.appendChild(square);
        }
        flexContainer.appendChild(squareContainer);
    }
    
}

function changeColor(){
    this.style.backgroundColor = "black";  
}
