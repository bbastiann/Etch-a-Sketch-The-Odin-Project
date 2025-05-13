let gameDiv = document.createElement("div");
gameDiv.setAttribute("class","flex-gameDiv");

let gameButton = document.createElement("button");
gameButton.setAttribute("class","game-button");
gameButton.textContent = "Start Game";
gameButton.addEventListener("click", () => {
    let number = prompt("what's grid size ?");

    if (number === null) {
        log.innerText = "OK, maybe next time.";
    }else{
        createSquares(number);
    }
      
})

let flexContainer = document.createElement("div");
flexContainer.setAttribute("class", "flex-container");

gameDiv.appendChild(gameButton);
gameDiv.appendChild(flexContainer);

document.body.appendChild(gameDiv);

function createSquares(size){
    for(i = 0; i < size; i++){
        let squareContainer = document.createElement("div");
        squareContainer.setAttribute("class", "square-container");

        for(j = 0; j < size; j++){
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
